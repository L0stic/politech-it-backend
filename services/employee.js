import employeeDAO from '../daos/employee.js';

function isPositiveInteger(string_) {
    const n = Math.floor(Number(string_));
    return n !== Number.POSITIVE_INFINITY && String(n) === string_ && n > 0;
}

export class ServiceError extends Error {
    constructor({statusCode, message}) {
        super(message);
        this.name = 'ServiceError';
        this.statusCode = statusCode;
    }
}

class EmployeeService {
    async addEmployee(employee) {
        // Validate employee fields

        return employeeDAO.addEmployee(employee);
    }

    async updateEmployee(id, employee) {
        if (!isPositiveInteger(id)) {
            throw new ServiceError({
                statusCode: 400,
                message: 'id field must be a positive integer and greater than zero',
            });
        }

        // Validate employee fields

        const oldEmployee = employeeDAO.updateEmployee(id, employee);

        if (employee === undefined) {
            throw new ServiceError({
                statusCode: 404,
                message: `employee with id ${id} is not found`,
            });
        }

        return oldEmployee;
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

export const employeeService = new EmployeeService();
