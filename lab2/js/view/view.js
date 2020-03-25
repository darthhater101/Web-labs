import AccountView from './account_view.js';

export default class View {
    constructor(model) {
        this.model = model;
    }

    view_list() {
        document.querySelector('#list').innerHTML = this.toHtml();
    }

    toHtml() {
        const items_html = this.model.account_list.map( (account) => {
            const account_view = new AccountView(account);
            return account_view.toHtml();
        }).join("");
        return `<table border="1"><tr><th>Login</th><th>Surname</th><th>Email</th></tr>${items_html}</table>`;
    }
}