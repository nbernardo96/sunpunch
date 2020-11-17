const path = require('path');
require('dotenv').config({path: path.join(path.resolve(__dirname, '..'), '.env')});

const settings = {
    client: process.env.MSSQL_CLIENT,
    connection: {
        host: process.env.MSSQL_DEV_HOST,
        user: process.env.MSSQL_DEV_USER,
        password: process.env.MSSQL_DEV_PASSWORD,
        database: process.env.MSSQL_DEV_DATABASE,
        port: Number.parseInt(process.env.MSSQL_DEV_PORT)
},
migrations: {
    tableName: 'migrations',
    directory: path.join(path.resolve(__dirname, '..'), 'database','migrations'),
},
seeds: {
    directory: path.join(path.resolve(__dirname, '..'), 'database','seeds'),
},
debug: true
};

console.log(process.env.MSSQL_CLIENT)

module.exports= settings;