import Account from "../model/account.js";

export default class Controller {
    constructor(account_list, account_list_view) {
        this.account_list = account_list;
        this.account_list_view = account_list_view;
        document.querySelector('#content').addEventListener('click', (e) => this.onClick(e)); 
        if (window.Worker) {
            this.worker = new Worker("js/web_worker/web_worker.js");
            this.worker.onmessage = function (e) {
                if (e.data == false) {
                    alert("Remove duplicates");
                    document.querySelector('#add-button').setAttribute("disabled", "disabled");
                }
                else document.querySelector('#add-button').removeAttribute("disabled");
            }
        }
    }

    onClick(e) {
        if (e.target.id === "add-button") {
            this.add_account();
            return;
        }
        if (e.target.className === "del-button") {
            this.delete_account(e.target.dataset.id);
            return;
        }
        if (e.target.className === "edit-button") {
            this.edit_account(e.target.dataset.id);
            return;
        }
    }

    add_account() {
        const login = prompt('Enter login:', '');
        const surname = prompt('Enter surname:', '');
        const email = prompt('Enter email:', '');

        if(login != '' && surname != '' && email != '') {
            this.account_list.add_account(login, surname, email);
            this.account_list_view.view_list();
            this.worker.postMessage(this.account_list.account_list);
        }
        else {
            alert("Empty");
        }
    }

    delete_account(id) {
        this.account_list.delete_account(id);
        this.account_list_view.view_list();
        this.worker.postMessage(this.account_list.account_list);
    }

    edit_account(id) {
        const login = prompt('Enter login:', '');
        const surname = prompt('Enter surname:', '');
        const email = prompt('Enter email:', '');

        if(login != '' && surname != '' && email != '') {
            this.account_list.edit_account(id, login, surname, email);
            this.account_list_view.view_list();
            this.worker.postMessage(this.account_list.account_list);
        }
        else {
            alert("Empty");
        }
    }
}