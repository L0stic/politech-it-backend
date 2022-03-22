import { ServiceError, isPositiveInteger} from './util.js';
import employeeDAO from '../daos/employee.js';
import { employeeSchema } from '../schemas/employee.js';


class EmployeeService {
    async addEmployee(employee) {
        const { value, error} = employeeSchema.employeePOST.validate(employee);
        const valid = error == null;

        if (!valid) {
            const {details} = error;
            const message = details.map(i => i.message).join(',');

            throw new ServiceError({
                statusCode: 400,
                message: message,
            });
        }

        return employeeDAO.addEmployee(employee);
    }

    async updateEmployee(id, employee) {
        if (!isPositiveInteger(id)) {
            throw new ServiceError({
                statusCode: 400,
                message: 'id field must be a positive integer and greater than zero',
            });
        }

        const { value, error } = employeeSchema.employeePUT.validate(employee);
        const valid = error == null;

        if (!valid) {
            const {details} = error;
            const message = details.map(i => i.message).join(',');

            throw new ServiceError({
                statusCode: 400,
                message: message,
            });
        }

        const newEmployee = employeeDAO.updateEmployee(id, employee);

        if (newEmployee === undefined) {
            throw new ServiceError({
                statusCode: 404,
                message: `employee with id ${id} is not found`,
            });
        }

        return newEmployee;
    }

    async removeEmployee(id) {
        if (!isPositiveInteger(id)) {
            throw new ServiceError({
                statusCode: 400,
                message: 'id field must be a positive integer and greater than zero',
            });
        }

        const employee = employeeDAO.removeEmployee(id);

        if (employee === undefined) {
            throw new ServiceError({
                statusCode: 404,
                message: `employee with id ${id} is not found`,
            });
        }

        return employee;
    }

    async getEmployees() {
        return employeeDAO.getEmployees();
    }

    async getEmployeeById(id) {
        if (!isPositiveInteger(id)) {
            throw new ServiceError({
                statusCode: 400,
                message: 'id field must be a positive integer and greater than zero',
            });
        }

        const employee = await employeeDAO.getEmployeeById(id);

        if (employee === undefined) {
            throw new ServiceError({
                statusCode: 404,
                message: `employee with id ${id} is not found`,
            });
        }

        return employee;
    }
}

export default new EmployeeService();
