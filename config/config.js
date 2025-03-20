require('dotenv').config();
const { URL } = require('url');

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  },
};

// ⚡ Parse DATABASE_URL pour Railway
if (process.env.DATABASE_URL) {
  const dbUrl = new URL(process.env.DATABASE_URL);

  config.production = {
    username: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.substring(1), // Enlève le premier "/"
    host: dbUrl.hostname,
    dialect: 'mysql',
    port: dbUrl.port,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
} else {
  console.error('❌ Erreur : DATABASE_URL non définie dans les variables d’environnement.');
}

module.exports = config;