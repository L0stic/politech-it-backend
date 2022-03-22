import { ServiceError } from './util.js';
import userDAO from '../daos/user.js';
import { userSchema } from '../schemas/user.js';


class UserService {
    async addUser(user) {
        const { value, error} = userSchema.userPOST.validate(user);
        const valid = error == null;

        if (!valid) {
            const {details} = error;
            const message = details.map(i => i.message).join(',');

            throw new ServiceError({
                statusCode: 400,
                message: message,
            });
        }

        return userDAO.addUser(user);
    }

    async updateUser(login, user) {
        const { value, error } = userSchema.userPUT.validate(user);
        const valid = error == null;

        if (!valid) {
            const {details} = error;
            const message = details.map(i => i.message).join(',');

            throw new ServiceError({
                statusCode: 400,
                message: message,
            });
        }

        const newUser = userDAO.updateUser(login, user);

        if (newUser === undefined) {
            throw new ServiceError({
                statusCode: 404,
                message: `user with login ${login} is not found`,
            });
        }

        return newUser;
    }

    async removeUser(login) {
        const user = userDAO.removeUser(login);

        if (user === undefined) {
            throw new ServiceError({
                statusCode: 404,
                message: `user with login ${login} is not found`,
            });
        }

        return user;
    }

    async getUsers() {
        return userDAO.getUsers();
    }

    async getUserByLogin(login) {
        const user = await userDAO.getUserByLogin(login);

        if (user === undefined) {
            throw new ServiceError({
                statusCode: 404,
                message: `user with login ${login} is not found`,
            });
        }

        return employee;
    }
}

export default new UserService();
