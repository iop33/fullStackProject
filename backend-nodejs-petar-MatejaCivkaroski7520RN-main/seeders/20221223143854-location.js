'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Locations', [
      {
      grad: 'Beograd',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        grad: 'Kragujevac',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        grad: 'Novi Sad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        grad: 'Nis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        grad: 'Leskovac',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  
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
