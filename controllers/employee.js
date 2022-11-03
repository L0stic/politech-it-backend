import { ServiceError } from "../services/util.js"
import employeeService from '../services/employee.js';

class EmployeeController {
    async getEmployees(_request, response, _next) {
        try {
            const employees = await employeeService.getEmployees();

            response.status(200).json(employees);
        } catch (error) {
            response.status(500).json({
                error: error.message,
            });
        }
    }

    async getEmployeeById(request, response, _next) {
        try {
            const id = request.params.id;
            const employee = await employeeService.getEmployeeById(Number.parseInt(id));

            response.status(200).json(employee);
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

    /*
    async addEmployee(request, response, _next) {
        try {
            const id = await employeeService.addEmployee(request.body);

            response.status(201).json({id});
        } catch (error) {
            response.status(500).json({
                error: error.message,
            });
        }
    }

    async updateEmployee(request, response, _next) {
        try {
            const id = request.params.id;
            const newEmployee = await employeeService.updateEmployee(id, request.body);
            response.status(201).json(newEmployee);
        } catch (error) {
            response.status(500).json({
                error: error.message,
            });
        }
    }

    async removeEmployee(request, response, _next) {
        try {
            const id = request.params.id;
            const employee = await employeeService.removeEmployee(id);

            response.status(201).json({employee});
        } catch (error) {
            response.status(500).json({
                error: error.message,
            });
        }
    }
    */
}

export default new EmployeeController();
