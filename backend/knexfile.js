require('@babel/register');

const db = require('./config/database');

module.exports = Object.assign({}, db);