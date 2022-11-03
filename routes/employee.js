import express from 'express';
import bodyParser from 'body-parser';

import { ServiceError } from "../services/util.js"
import employeeService from '../services/employee.js';


const parser = bodyParser.json();
const employeeRouter = express.Router();



employeeRouter.get('/', parser, async (_request, response, _next) => {
    try {
        const employees = await employeeService.getEmployees();

        response.status(200).json(employees);
    } catch (error) {
        response.status(500).json({
            error: error.message,
        });
    }
});

employeeRouter.get('/:id', async (request, response, _next) => {
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
);


// employeeRouter.route('/')
//     .post(employeeController.addEmployee);

// employeeRouter.route('/:id')
//     .put(employeeController.updateEmployee);

// employeeRouter.route('/:id')
//     .delete(employeeController.removeEmployee);

export default employeeRouter;
