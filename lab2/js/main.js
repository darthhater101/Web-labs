import AccountList from './model/account_list.js';
import AccountListView from './view/account_list_view.js';
import Controller from './controller/controller.js';

let account_list = new AccountList();
let account_list_view = new AccountListView(account_list);
let controller = new Controller(account_list, account_list_view);

controller.account_list.add_account("darth", "Feschenko", "razerfanat@gmail.com");
controller.account_list.add_account("Login", "Surname", "email@some.com");
controller.account_list_view.view_list();