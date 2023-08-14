'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Kategorijas', [
      {
       vrsta:'Kasalj',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vrsta:'Alergije',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vrsta:'Bubrezi i mokracni putevi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vrsta:'Jetra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vrsta:'Stomacne tegobe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vrsta:'Cajevi',
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
