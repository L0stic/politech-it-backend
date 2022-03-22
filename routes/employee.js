import express from 'express';
import employeeController from '../controllers/employee.js';

const employeeRouter = express.Router();

employeeRouter.route('/')
    .get(employeeController.getEmployees);

employeeRouter.route('/:id')
    .get(employeeController.getEmployeeById);

employeeRouter.route('/add')
    .post(employeeController.addEmployee);

export default employeeRouter;
