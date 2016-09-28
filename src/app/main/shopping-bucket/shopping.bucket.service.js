/**
 * Created by manick on 26.09.16.
 */

const _log = new WeakMap();
const _NotificationService = new WeakMap();
const _rootScope=new WeakMap();

class ShoppingBucketService {

    constructor($log, NotificationService,$rootScope) {
        'ngInject';
        this.items = [];
        _log.set(this, $log);
        _NotificationService.set(this, NotificationService);
        _rootScope.set(this,$rootScope);
    }

    addToBucket(item) {

        if(this.items.includes(item))
        {
            _NotificationService.get(this).showToast(`You have already added ${item.name} to bucket`);
            return;
        }

        this.items.push(item);
        _log.get(this).debug(this.items);

        _rootScope.get(this).$emit('itemAdded')


    }

    removeFromBucket(item)
    {
        let i=this.items.indexOf(item);
        this.items.splice(i,1);

        _rootScope.get(this).$emit('itemRemoved')
    }

    getTotalPrice()
    {
        return this.items
            .map(item=>item.price)
            .reduce((a,b)=>a+b,0);
    }

    getItems()
    {
        return this.items;
    }

}


export {ShoppingBucketService};
