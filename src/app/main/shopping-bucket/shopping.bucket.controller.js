/**
 * Created by manick on 28.09.16.
 */


const _ShoppingBucketService=new WeakMap();

class ShoppingBucketController
{
    constructor(phones,ShoppingBucketService)
    {
        'ngInject';
        this.totalPrice=0;
        _ShoppingBucketService.set(this,ShoppingBucketService);
        this.activate(phones);
    }

    activate(phones)
    {
        this.phones=phones;
        this.getTotalPrice();

    }

    removeFromBucket(item)
    {
        _ShoppingBucketService.get(this).removeFromBucket(item);
        this.getTotalPrice();
    }

    getTotalPrice()
    {
        this.totalPrice=_ShoppingBucketService.get(this).getTotalPrice()
    }

}

export {ShoppingBucketController}
