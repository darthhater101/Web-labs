export default class Account {
    constructor(id, login, surname, email) {
        this.id = id;
        this.login = login;
        this.surname = surname;
        this.email = email;
    }

    edit(login, surname, email) {
        this.login = login;
        this.surname = surname;
        this.email = email;
    }
}