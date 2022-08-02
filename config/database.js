/* eslint-disable no-undef */
require('dotenv').config();

module.exports = {
  
    // Conexión
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'sequelize',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
  
    // Configurar Seeds
    seederStorage: 'sequelize',
    //seederStoragePath: "sequelizeSeeds.json",
    seederStorageTableName: 'seeds',

    // Configurar Migraciones
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations',
  
    define: {
        paranoid: true,
        timestamps: true,
        // Genera claves foraneas de este tipo user_id en vez de userId
        underscored: true
    }
};