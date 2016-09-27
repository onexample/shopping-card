import {ToolbarController} from './toolbar.controller.js';

const toolbar=angular
  .module('app.toolbar', [])
  .controller('ToolbarController', ToolbarController);

export {toolbar};
