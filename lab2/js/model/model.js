import Account from "../model/account.js";


export default class Model {
    constructor() {
        this.account_list = [];
        this.can_add = true;

        if (window.Worker) {
            this.worker = new Worker("js/model/web_worker.js");
        }
    }

    add_account(login, surname, email) {
        this.worker.onmessage = function(e) {
            this.can_add = e.data;
        }
        if(this.can_add == false) {
            alert("Remove duplicate login");
            return;
        }
        let id;
        if (this.account_list.length == 0) id = 1;
        else id = parseInt(this.account_list[this.account_list.length - 1].id) + 1;
        const account = new Account(id.toString(10), login, surname, email);
        this.account_list.push(account);
        this.worker.postMessage(this.account_list);
        return account;
    }

    edit_account(id, login, surname, email) {
        const index = this.account_list.findIndex((x) => x.id === id);
        this.account_list[index].login = login;
        this.account_list[index].surname = surname;
        this.account_list[index].email = email;
    }

    delete_account(id) {
        this.account_list = this.account_list.filter(function (x) {
            return x.id != id;
        });
    }
}