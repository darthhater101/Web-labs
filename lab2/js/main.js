import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';

let model = new Model();
let view = new View(model);
let controller = new Controller(model, view);
