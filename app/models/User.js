class User {
    constructor(email, fullName, gender) {
        this.userId = '';
        this.generatedPassword = '';
        this.email = '';
        this.token = '';
        this.fullName = '';
        this.gender = '';
        this.isLogged = '';
        this.expireTime = '';
    }
    summary() {
        return this.name + " was created by " + this.founder + " in " + this.year;
    }
}