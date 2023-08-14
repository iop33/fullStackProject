'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
       ime:'Bilax',
       cena:480,
       upotreba:'2x250ml',
       kategorijaId:6,
       proizvodjacId:5,
       createdAt: new Date(),
       updatedAt: new Date() 
      },
      {
        ime:'Caj za jetru',
        cena:380,
        upotreba:'2x250ml',
        kategorijaId:4,
        proizvodjacId:5, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Caj kod bronhijalne astme',
        cena:408,
        upotreba:'1x250ml uvece',
        kategorijaId:1,
        proizvodjacId:5, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Liv52',
        cena:830,
        upotreba:'2x2 tablete',
        kategorijaId:4,
        proizvodjacId:3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Aerius',
        cena:466,
        upotreba:'1 dnevno',
        kategorijaId:2,
        proizvodjacId:1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Gasimetikon',
        cena:567,
        upotreba:'2x1 pre jela',
        kategorijaId:5,
        proizvodjacId:4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Bronchicun sirup',
        cena:472,
        upotreba:'2x5ml',
        kategorijaId:1,
        proizvodjacId:2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ime:'Letizen tablete',
        cena:365,
        upotreba:'2x1',
        kategorijaId:2,
        proizvodjacId:2, 
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
