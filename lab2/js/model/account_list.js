import Account from "./account.js";


export default class AccountList {
    constructor() {
        this.account_list = [];
    }

    add_account(login, surname, email) {
        let id = 0;
        if (this.account_list.length == 0) id = 1;
        else id = parseInt(this.account_list[this.account_list.length - 1].id) + 1;
        const account = new Account(id.toString(10), login, surname, email);
        this.account_list.push(account);
        return account;
    }

    edit_account(id, login, surname, email) {
        const index = this.account_list.findIndex((x) => x.id === id);
        this.account_list[index].edit(login, surname, email);
    }

    delete_account(id) {
        this.account_list = this.account_list.filter(function (x) {
            return x.id != id;
        });

    }
}