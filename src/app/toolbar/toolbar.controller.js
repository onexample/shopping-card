
const _rootScope=new WeakMap();
const _ShoppingBucketService=new WeakMap();

class ToolbarController {

    constructor(ShoppingBucketService,$rootScope)
    {
        'ngInject';
        this.search='';
        this.total=0;
        _ShoppingBucketService.set(this,ShoppingBucketService);
        _rootScope.set(this,$rootScope);
        this.activate();
    }

    activate()
    {
        this.getTotal();
        _rootScope.get(this).$on('itemAdded',()=>{
            this.getTotal();
        })
        _rootScope.get(this).$on('itemRemoved',()=>{
            this.getTotal();
        })
    }

    searchForPhone()
    {
        _rootScope.get(this).$emit('searchFired',this.search);
    }

    clearSearchField()
    {
        this.search='';
    }

    getTotal()
    {
        this.total=_ShoppingBucketService.get(this).getItems().length;
    }

}

export {ToolbarController};






