'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Nacin_placanjas', [
      {
       nacin:'uplata na racun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nacin:'pouzecem',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        nacin:'kartica',
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
