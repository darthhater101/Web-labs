import Account from "../model/account.js";

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        document.querySelector('#content').addEventListener('click', (e) => this.onClick(e)); 
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
            this.model.add_account(login, surname, email);
            this.view.view_list();
        }
        else {
            alert("Empty");
        }
    }

    delete_account(id) {
        this.model.delete_account(id);
        this.view.view_list();
    }

    edit_account(id) {
        const login = prompt('Enter login:', '');
        const surname = prompt('Enter surname:', '');
        const email = prompt('Enter email:', '');

        if(login != '' && surname != '' && email != '') {
            this.model.edit_account(id, login, surname, email);
            this.view.view_list();
        }
        else {
            alert("Empty");
        }
    }
}