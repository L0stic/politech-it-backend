# Information technologies

## Beginning of work
Install required packages:
```shell
npm install
```

Create `knexfile.js` for connection your database.
Example for **postgresql**:
```javascript
export default {
  development: {
    client: 'postgresql',
    connection: {
      host:     'host',
      database: 'database',
      user:     'user',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/'
    }
  },
};
```

If database is empty - init it:
```shell
npm run db:init
```

Start server:
```shell
npm run start

# dev-mode
npm run dev
```

## Project structure

* `routes`

* `controllers` - error handling

* `services` - request processing

* `schemas` - data validation

* `daos` - communicating with the database

* `db` - connecting and modifying the database
    - `migrations`
    - `seeds`
