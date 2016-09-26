/**
 * Created by manick on 26.09.16.
 */
const _http=new WeakMap();
const _ApiPath=new WeakMap();

class Api
{
  constructor($http,ApiPath)
  {
    'ngInject';
    _http.set(this,$http);
    _ApiPath.set(this,ApiPath)
  }


  getPhonesList()
  {
    return _http
      .get(this)
      .get(_ApiPath.get(this).PHONES)
      .then(res=>res.data)
  }

}

export {Api};
