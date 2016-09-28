/**
 * Created by manick on 27.09.16.
 */

import {NotificationService} from './services/notification.service.js'

const core=angular
    .module('app.core',[
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'ui.router',
        'ngMaterial'
    ])
    .service('NotificationService',NotificationService);

export {core};
