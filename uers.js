class User {
    constructor({ name, email, phone, photo, password }) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.photo = photo;
        this.password = password;
        this.points = 0;
        this.tasksCompleted = 0;
    }
}

const users = [];

module.exports = { User, users };
