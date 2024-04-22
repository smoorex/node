class User {
    constructor(username, password, email, role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role; // "admin" or "user"
    }
}

module.exports = User;
