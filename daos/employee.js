import db from '../db/db.js';

class EmployeeDAO {
    async addEmployee(employee) {
        const [id] = await db('employees')
            .insert(employee)
            .returning('id');

        return id;
    }

    async getEmployees() {
        return db
            .select('*')
            .from('employees');
    }

    async getEmployeeById(id) {
        const [employee] = await db
            .select('*')
            .from('employees')
            .where({id});

        return employee;
    }
}

export default new EmployeeDAO();
