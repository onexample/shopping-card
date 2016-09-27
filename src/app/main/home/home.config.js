/**
 * Created by manick on 27.09.16.
 */
export function homeConfig($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.home', {
      url: '/',
      views: {
        'content@app': {
          templateUrl: 'app/main/home/home.html',
          controller: 'HomeController as vm',
          resolve: {
            phones: function (ShoppingCardService) {
              return ShoppingCardService.getPhones()
            }
          }
        }
      }
    });
}
