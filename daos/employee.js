import db from '../db/db.js';

class EmployeeDAO {
    async getEmployees() {
        return await db('employees')
            .leftJoin('positions', 'employees.position_id', '=', 'positions.id')
            .select(
                'employees.id',
                'first_name',
                'last_name',
                'position',
                'birthday',
                'salary'
            );
        }

    async getEmployeeById(id) {
        const [employee] = await db('employees')
            .select('*')
            .where({id});

        return employee;
    }

    /*
    async addEmployee(employee) {
        const [id] = await db('employees')
            .insert(employee)
            .returning('id');

        return id;
    }

    async updateEmployee(id, employee) {
        const [newEmployee] = await db('employees')
            .where({id})
            .update(employee)
            .returning('*');

        return newEmployee;
    }

    async removeEmployee(id) {
        const [employee] = await db('employees')
            .del()
            .where({id})
            .returning('*');

        return employee;
    }
    */
}

export default new EmployeeDAO();
