import db from '../db/db.js';

class EmployeeDAO {
    async addEmployee(employee) {
        const [id] = await db('employees')
            .insert(employee)
            .returning('id');

        return id;
    }

    async updateEmployee(id, employee) {
        const [oldEmployee] = await db('employees')
            .where({id})
            .update(employee)
            .returning('*');

        return oldEmployee;
    }

    async removeEmployee(id) {
        const [employee] = await db('employees')
            .del()
            .where({id})
            .returning('*');

        return employee;
    }

    async getEmployees() {
        return db
            .select('*')
            .from('employees');
    }

    async getEmployeeById(id) {
        const [employee] = await db('employees')
            .select('*')
            .where({id});

        return employee;
    }
}

export default new EmployeeDAO();
