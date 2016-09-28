/**
 * Created by manick on 28.09.16.
 */

import { shoppingBucketConfig } from './shopping.bucket.config.js';
import { ShoppingBucketService } from './shopping.bucket.service.js';
import { ShoppingBucketController } from  './shopping.bucket.controller.js';


const shoppingBucket=angular
    .module('app.shopping_bucket',[])
    .config(shoppingBucketConfig)
    .service('ShoppingBucketService',ShoppingBucketService)
    .controller('ShoppingBucketController',ShoppingBucketController)

export {shoppingBucket}
