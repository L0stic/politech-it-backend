import express from 'express';
import employeeController from '../controllers/employee.js';

const employeeRouter = express.Router();

employeeRouter.route('/')
    .post(employeeController.addEmployee);

employeeRouter.route('/:id')
    .put(employeeController.updateEmployee);

employeeRouter.route('/:id')
    .delete(employeeController.removeEmployee);


employeeRouter.route('/')
    .get(employeeController.getEmployees);

employeeRouter.route('/:id')
    .get(employeeController.getEmployeeById);

export default employeeRouter;
