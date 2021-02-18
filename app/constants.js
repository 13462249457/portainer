export const API_ENDPOINT_AUTH = 'api/auth';
export const API_ENDPOINT_DOCKERHUB = 'api/dockerhub';
export const API_ENDPOINT_CUSTOM_TEMPLATES = 'api/custom_templates';
export const API_ENDPOINT_EDGE_GROUPS = 'api/edge_groups';
export const API_ENDPOINT_EDGE_JOBS = 'api/edge_jobs';
export const API_ENDPOINT_EDGE_STACKS = 'api/edge_stacks';
export const API_ENDPOINT_EDGE_TEMPLATES = 'api/edge_templates';
export const API_ENDPOINT_ENDPOINTS = 'api/endpoints';
export const API_ENDPOINT_ENDPOINT_GROUPS = 'api/endpoint_groups';
export const API_ENDPOINT_MOTD = 'api/motd';
export const API_ENDPOINT_EXTENSIONS = 'api/extensions';
export const API_ENDPOINT_REGISTRIES = 'api/registries';
export const API_ENDPOINT_RESOURCE_CONTROLS = 'api/resource_controls';
export const API_ENDPOINT_SETTINGS = 'api/settings';
export const API_ENDPOINT_STACKS = 'api/stacks';
export const API_ENDPOINT_STATUS = 'api/status';
export const API_ENDPOINT_SUPPORT = 'api/support';
export const API_ENDPOINT_USERS = 'api/users';
export const API_ENDPOINT_TAGS = 'api/tags';
export const API_ENDPOINT_TEAMS = 'api/teams';
export const API_ENDPOINT_TEAM_MEMBERSHIPS = 'api/team_memberships';
export const API_ENDPOINT_TEMPLATES = 'api/templates';
export const API_ENDPOINT_WEBHOOKS = 'api/webhooks';
export const PAGINATION_MAX_ITEMS = 10;

angular
  .module('portainer')
  .constant('API_ENDPOINT_AUTH', API_ENDPOINT_AUTH)
  .constant('API_ENDPOINT_DOCKERHUB', API_ENDPOINT_DOCKERHUB)
  .constant('API_ENDPOINT_CUSTOM_TEMPLATES', API_ENDPOINT_CUSTOM_TEMPLATES)
  .constant('API_ENDPOINT_ENDPOINTS', API_ENDPOINT_ENDPOINTS)
  .constant('API_ENDPOINT_ENDPOINT_GROUPS', API_ENDPOINT_ENDPOINT_GROUPS)
  .constant('API_ENDPOINT_MOTD', API_ENDPOINT_MOTD)
  .constant('API_ENDPOINT_REGISTRIES', API_ENDPOINT_REGISTRIES)
  .constant('API_ENDPOINT_RESOURCE_CONTROLS', API_ENDPOINT_RESOURCE_CONTROLS)
  .constant('API_ENDPOINT_SETTINGS', API_ENDPOINT_SETTINGS)
  .constant('API_ENDPOINT_STACKS', API_ENDPOINT_STACKS)
  .constant('API_ENDPOINT_STATUS', API_ENDPOINT_STATUS)
  .constant('API_ENDPOINT_SUPPORT', API_ENDPOINT_SUPPORT)
  .constant('API_ENDPOINT_USERS', API_ENDPOINT_USERS)
  .constant('API_ENDPOINT_TAGS', API_ENDPOINT_TAGS)
  .constant('API_ENDPOINT_TEAMS', API_ENDPOINT_TEAMS)
  .constant('API_ENDPOINT_TEAM_MEMBERSHIPS', API_ENDPOINT_TEAM_MEMBERSHIPS)
  .constant('API_ENDPOINT_TEMPLATES', API_ENDPOINT_TEMPLATES)
  .constant('API_ENDPOINT_WEBHOOKS', API_ENDPOINT_WEBHOOKS)
  .constant('PAGINATION_MAX_ITEMS', PAGINATION_MAX_ITEMS);
