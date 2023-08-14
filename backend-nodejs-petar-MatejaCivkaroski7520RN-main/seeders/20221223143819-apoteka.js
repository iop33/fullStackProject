'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Apotekas', [
      {
      ime:'apoteka1',
      adresa:'ulica Marka Kraljevica',
      locationsId:1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        ime:'apoteka2',
        adresa:'ulica Milosa Velikog',
        locationsId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'apoteka3',
        adresa:'ulica Sinana Sakica',
        locationsId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'apoteka4',
        adresa:'ulica kralja Milana',
        locationsId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'apoteka5',
        adresa:'ulica Vranjska',
        locationsId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'apoteka6',
        adresa:'ulica Pozecka',
        locationsId:1,
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
