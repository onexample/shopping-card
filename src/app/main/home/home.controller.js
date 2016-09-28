const _ShoppingBucketService = new WeakMap();
const _rootScope=new WeakMap();
const _timeout=new WeakMap();

class HomeController {
    constructor(phones, ShoppingBucketService,$rootScope,$timeout) {
        'ngInject';

        this.filterType='all';
        this.search='';
        _rootScope.set(this,$rootScope);
        _timeout.set(this,$timeout);

        _ShoppingBucketService.set(this, ShoppingBucketService);
        this.activate(phones);
    }

    activate(phones) {
        this.phones = phones;

        _rootScope.get(this).$on('searchFired',(event,data)=>{
            _timeout.get(this)( () => {
                this.search = data;
            },0)
        })
    }

    addToBucket(item) {
        _ShoppingBucketService.get(this).addToBucket(item);
    }

    filterFn(value)
    {
        if(value==='all')
        {
            return
        }
        return (item)=>item.type===value
    }

}

export {HomeController}
