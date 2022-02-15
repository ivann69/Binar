'use strict';
const fs = require('fs');

module.exports = {
  up(queryInterface, Sequelize) {
    return new Promise((resolve, reject) => {
      fs.readFile('./data/users.json', 'utf-8', (error, data) => {
        if (error) reject(error);
        else {
          data = JSON.parse(data);
          resolve(data);
        }
      });
    }).then((data) => {
      data.forEach((datum) => {
        // tambain createdAt dan updatedAt
        datum.createdAt = new Date();
        datum.updatedAt = new Date();
      });
      return queryInterface.bulkInsert('Users', data, {});
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};