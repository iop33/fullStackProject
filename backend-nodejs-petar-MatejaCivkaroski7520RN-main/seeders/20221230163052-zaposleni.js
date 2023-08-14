'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Zaposlenis', [
      {
        ime:"Jovana",
        pozicijaId:1,
        plata:1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:"Sanja",
        pozicijaId:2,
        plata:500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:"Zorana",
        pozicijaId:3,
        plata:300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:"Miodrag",
        pozicijaId:4,
        plata:2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:"Milan",
        pozicijaId:2,
        plata:500,
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
