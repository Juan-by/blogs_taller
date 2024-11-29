'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("blocks", [ 
      {
        id: 1,
        titulo: "HarryPotter",
        descripcion: "Public",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        titulo: "abracadabra",
        descripcion: "Publicoooo",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("blocks", null, {}); 
  }
};