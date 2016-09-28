const _ShoppingBucketService=new WeakMap();

class HomeController
{
  constructor (phones,ShoppingBucketService)
  {
    'ngInject';

    this.activate(phones);
    _ShoppingBucketService.set(this,ShoppingBucketService);
  }

  activate(phones)
  {
    this.phones=phones;
  }

  addToBucket(item)
  {
    _ShoppingBucketService.get(this).addToBucket(item);
  }

}

export {HomeController}
