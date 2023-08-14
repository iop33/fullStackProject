'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pozicijas', [
      {
        ime_pozicije:"farmaceut",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime_pozicije:"farmaceutski_tehnicar",
        createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        ime_pozicije:"cistac",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime_pozicije:"direktor",
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
