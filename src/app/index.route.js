export function routerConfig ($stateProvider, $urlRouterProvider,$locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
      views   : {
        'main@'         : {
          templateUrl: 'app/core/layouts/content-with-toolbar.html',
          controller : 'MainController as vm'
        },
        'toolbar@app'   : {
          templateUrl: 'app/toolbar/toolbar.html',
          controller : 'ToolbarController as vm'
        }
      }
    });





}
