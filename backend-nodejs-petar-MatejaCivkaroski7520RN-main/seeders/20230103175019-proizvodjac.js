'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Proizvodjacs', [
      {
       ime:'Schering-plough',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Krka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Hymalaja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Esensa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Josif Pancic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Herbiko natural',
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
