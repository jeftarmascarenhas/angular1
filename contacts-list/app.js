'use strict';

angular.module('contactApp', [
  'ui.router',
  'ctrl.users'
]).
config(['$stateProvider', '$urlRouterProvider', uiConfig]);

function uiConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/users');

  $stateProvider
  .state('list', {
    url:'/list',
    template: '<p>Teste</p>'
  });

}
