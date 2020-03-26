import Account from "../model/account.js";


export default class Model {
    constructor() {
        this.account_list = [];
        if (window.Worker) {
            this.worker = new Worker("js/model/web_worker.js");
            this.worker.onmessage = function (e) {
                if (e.data == false) {
                    alert("Remove duplicates");
                    document.querySelector('#add-button').setAttribute("disabled", "disabled");
                }
                else document.querySelector('#add-button').removeAttribute("disabled");
            }
        }
    }

    add_account(login, surname, email) {
        let id = 0;
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
        this.worker.postMessage(this.account_list);
    }

    delete_account(id) {
        this.account_list = this.account_list.filter(function (x) {
            return x.id != id;
        });
        this.worker.postMessage(this.account_list);
    }
}