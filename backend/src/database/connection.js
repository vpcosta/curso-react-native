const kmex = require('knex');
const configuration = require('../../knexfile');

const connection = kmex(configuration.development);

module.exports = connection;