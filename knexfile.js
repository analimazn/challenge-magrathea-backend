// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/src/db/db.sqlite'
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds',
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'pg',
    connection: process.env.STAGE_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds',
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds',
    }
  }

}
