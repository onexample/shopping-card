export function runBlock($log, $rootScope,$state) {
    'ngInject';
    $log.debug('runBlock end');


    let $stateChangeError = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

        //console.log(arguments);

        $log.debug('Resolve fromState: ', fromState);
        $log.debug('Resolve toState: ', toState);
        $log.debug('Resolve Error: ', error);
        $log.debug('Resolve event: ', event);
        $log.debug('Resolve fromParams: ', fromParams);
        $log.debug('Resolve toParams: ', toParams);

    });

    let stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess',  function (event, toState, toParams, fromState) {
        $rootScope.showSearch = toState.name==='app.home';
    })





}
