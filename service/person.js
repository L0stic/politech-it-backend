const personDAO = require('../dao/person');

class PersonService {
    createPerson(personDao) {
        const { firstName, lastName, email } = personDao;
        return personDAO.createPerson(firstName, lastName, email);
    }
}

module.exports = new PersonService();
