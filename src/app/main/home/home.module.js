/**
 * Created by manick on 27.09.16.
 */
import { HomeController } from './home.controller';
import {homeConfig} from './home.config.js';
const home=angular
  .module('app.home',[])
  .config(homeConfig)
  .controller('HomeController', HomeController);


export {home};
