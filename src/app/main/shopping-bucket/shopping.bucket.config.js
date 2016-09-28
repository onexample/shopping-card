/**
 * Created by manick on 28.09.16.
 */
export function shoppingBucketConfig($stateProvider)
{
    'ngInject';
    $stateProvider
        .state('app.shopping_bucket', {
            url: '/cart',
            views: {
                'content@app': {
                    templateUrl: 'app/main/shopping-bucket/shopping-bucket.html',
                    controller: 'ShoppingBucketController as vm',
                    resolve: {
                        phones: function (ShoppingBucketService)
                        {
                            return ShoppingBucketService.getItems()
                        }
                    }
                }
            }
        });
}
