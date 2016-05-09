'use strict';

angular.module('contactApp', [
  'ui.router',
  'ctrl.home',
  'ctrl.users'
]).
config(['$stateProvider', '$urlRouterProvider', uiConfig]);

function uiConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/users');
}
