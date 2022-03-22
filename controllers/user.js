import { ServiceError } from '../services/util.js';
import userService from '../services/user.js';

class UserController {
    async addUser(request, response, _next) {
        try {
            const login = await userService.addUser(request.body);

            response.status(201).json({login});
        } catch (error) {
            response.status(500).json({
                error: error.message,
            });
        }
    }

    async updateUser(request, response, _next) {
        try {
            const login = request.params.login;
            const newUser = await userService.updateUser(login, request.body);
            response.status(201).json(newUser);
        } catch (error) {
            response.status(500).json({
                error: error.message,
            });
        }
    }

    async removeUser(request, response, _next) {
        try {
            const login = request.params.login;
            const user = await userService.removeUser(login);

            response.status(201).json({user});
        } catch (error) {
            response.status(500).json({
                error: error.message,
            });
        }
    }

    async getUsers(_request, response, _next) {
        try {
            const users = await userService.getUsers();

            response.status(200).json(users);
        } catch (error) {
            response.status(500).json({
                error: error.message,
            });
        }
    }

    async getUserByLogin(request, response, _next) {
        try {
            const login = request.params.login;
            const user = await userService.getUserByLogin(login);

            response.status(200).json(user);
        } catch (error) {
            if (error instanceof ServiceError) {
                response.status(error.statusCode).json({
                    error: error.message,
                });
            } else {
                response.status(500).json({
                    error: error.message,
                });
            }
        }
    }
}

export default new UserController();
