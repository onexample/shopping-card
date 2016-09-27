class HomeController
{
  constructor (phones)
  {
    'ngInject';

    this.activate(phones);
  }

  activate(phones)
  {
    this.phones=phones;
  }

}

export {HomeController}
