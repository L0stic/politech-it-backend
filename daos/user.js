import db from '../db/db.js';

class UserDAO {
    async addUser(user) {
        const [login] = await db('users')
            .insert(user)
            .returning('login');

        return login;
    }

    async updateUser(login, password) {
        const [newUser] = await db('users')
            .where({login})
            .update(password)
            .returning('*');

        return newUser;
    }

    async removeUser(login) {
        const [user] = await db('users')
            .del()
            .where({login})
            .returning('*');

        return user;
    }

    async getUsers() {
        return await db('users')
            .select('*');
    }

    async getUserByLogin(login) {
        const [user] = await db('users')
            .select('*')
            .where({login});

        return user;
    }
}

export default new UserDAO();
