import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';

let model = new Model();
let view = new View(model);
let controller = new Controller(model, view);

controller.model.add_account("darth", "Feschenko", "razerfanat@gmail.com");
controller.model.add_account("Login", "Surname", "email@some.com");
controller.view.view_list();