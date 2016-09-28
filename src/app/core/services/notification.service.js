
const _mdToast=new WeakMap();
const _timeout=new WeakMap();



class NotificationService {

    constructor($mdToast, $timeout)
    {
        'ngInject';
        _mdToast.set(this,$mdToast)
        _timeout.set(this,$timeout)

    }

    showToast(message, delay=300)
    {
        _timeout.get(this)( () => {
            _mdToast.get(this).show(
                _mdToast.get(this).simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(3000)
            )
        }, delay);

    }

}

export {NotificationService};
