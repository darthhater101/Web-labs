export default class AccountView {
    constructor(account) {
        this.account = account;
    }

    toHtml() {
        return `
        <tr>
            <td> ${this.account.login} </td>
            <td> ${this.account.surname} </td>
            <td> ${this.account.email} </td>
            <td><button data-id="${this.account.id}" class="del-button">Delete</button></td>
            <td><button data-id="${this.account.id}" class="edit-button">Edit</button></td>
        </tr>`;
    }
}