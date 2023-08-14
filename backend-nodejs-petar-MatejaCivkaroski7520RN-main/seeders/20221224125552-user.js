'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
      ime: 'Mateja',
      prezime: 'Petrovic',
      password:'password',
      godine:'20',
      email:'mciv@gmail.com',
      adresa:'ulica Sinana Sakica',
      locationsId:1,
      admin:false,
      moderator:false,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ime: 'Luka',
      prezime: 'Lukic',
      password:'password',
      godine:'22',
      email:'ll@gmail.com',
      adresa:'ulica Marka Kraljevica',
      locationsId:2,
      admin:false,
      moderator:false,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ime: 'Strahinja',
      prezime: 'Strahinjic',
      password:'password',
      godine:'29',
      email:'ss@gmail.com',
      adresa:'ulica Milosa Velikog',
      locationsId:3,
      admin:false,
      moderator:false,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        ime: 'Milan',
        prezime: 'Milic',
        password:'password',
        godine:'19',
        email:'mm@gmail.com',
        adresa:'ulica kralja Milana',
        locationsId:1,
        admin:false,
        moderator:false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      ime: 'Jovan',
      prezime: 'Jovanovic',
      password:'password',
      godine:'20',
      email:'jj@gmail.com',
      adresa:'ulica Vranjska',
      locationsId:1,
      admin:false,
      moderator:false,
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
