import { core } from './core/core.module.js';
import { toolbar } from './toolbar/toolbar.module.js';
import { home } from './main/home/home.module.js';
import { shoppingBucket } from  './main/shopping-bucket/shopping.bucket.module.js'
import { ApiPath } from './index.constant.js';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller.js';
import { Api } from './index.api.js';

angular.module('shoppingCard', [
        core.name,
        toolbar.name,
        home.name,
        shoppingBucket.name
    ])
    .constant('ApiPath', ApiPath)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('Api', Api)
    .controller('MainController', MainController)


