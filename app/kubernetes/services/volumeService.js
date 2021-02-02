import angular from 'angular';
import _ from 'lodash-es';

import KubernetesVolumeConverter from 'Kubernetes/converters/volume';
import KubernetesPersistentVolumeConverter from 'Kubernetes/persistent-volume/converter';
import KubernetesPersistentVolumeClaimConverter from 'Kubernetes/converters/persistentVolumeClaim';

class KubernetesVolumeService {
  /* @ngInject */
  constructor($async, KubernetesResourcePoolService, KubernetesApplicationService, KubernetesPersistentVolumeClaimService, KubernetesPersistentVolumeService) {
    this.$async = $async;
    this.KubernetesResourcePoolService = KubernetesResourcePoolService;
    this.KubernetesApplicationService = KubernetesApplicationService;
    this.KubernetesPersistentVolumeClaimService = KubernetesPersistentVolumeClaimService;
    this.KubernetesPersistentVolumeService = KubernetesPersistentVolumeService;

    this.getAsync = this.getAsync.bind(this);
    this.getAllAsync = this.getAllAsync.bind(this);
    this.deleteAsync = this.deleteAsync.bind(this);
  }

  /**
   * GET
   */
  async getAsync(namespace, name) {
    try {
      const [pvc, pool] = await Promise.all([await this.KubernetesPersistentVolumeClaimService.get(namespace, name), await this.KubernetesResourcePoolService.get(namespace)]);
      if (pvc.PersistentVolumeName) {
        pvc.PersistentVolume = await this.KubernetesPersistentVolumeService.get(pvc.PersistentVolumeName);
      }
      return KubernetesVolumeConverter.pvcToVolume(pvc, pool);
    } catch (err) {
      throw err;
    }
  }

  async getAllAsync(namespace) {
    try {
      const pools = await this.KubernetesResourcePoolService.get(namespace);
      const res = await Promise.all(
        _.map(pools, async (pool) => {
          const pvcs = await this.KubernetesPersistentVolumeClaimService.get(pool.Namespace.Name);
          await Promise.all(
            _.map(pvcs, async (pvc) => {
              if (pvc.PersistentVolumeName) {
                pvc.PersistentVolume = await this.KubernetesPersistentVolumeService.get(pvc.PersistentVolumeName);
              }
            })
          );
          return _.map(pvcs, (pvc) => KubernetesVolumeConverter.pvcToVolume(pvc, pool));
        })
      );
      return _.flatten(res);
    } catch (err) {
      throw err;
    }
  }

  get(namespace, name) {
    if (name) {
      return this.$async(this.getAsync, namespace, name);
    }
    return this.$async(this.getAllAsync, namespace);
  }

  /**
   * CREATE
   * fv = KubernetesPersistentVolume
   */

  create(fv) {
    return this.$async(async () => {
      try {
        const pv = KubernetesPersistentVolumeConverter.formValuesToPersistentVolume(fv);
        await this.KubernetesPersistentVolumeService.create(pv);
        const pvc = KubernetesPersistentVolumeClaimConverter.volumesFormValuesToVolumeClaims(fv);
        pvc.PersistentVolume = pv;
        await this.KubernetesPersistentVolumeClaimService.create(pvc);
      } catch (err) {
        throw err;
      }
    });
  }

  /**
   * DELETE
   */
  async deleteAsync(volume) {
    try {
      const pv = volume.PersistentVolumeClaim.PersistentVolume;
      await this.KubernetesPersistentVolumeClaimService.delete(volume.PersistentVolumeClaim);
      if (pv) {
        await this.KubernetesPersistentVolumeService.delete(pv);
      }
    } catch (err) {
      throw err;
    }
  }

  delete(volume) {
    return this.$async(this.deleteAsync, volume);
  }
}

export default KubernetesVolumeService;
angular.module('portainer.kubernetes').service('KubernetesVolumeService', KubernetesVolumeService);
