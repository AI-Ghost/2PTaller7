'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let desc = ['Admin', 'Supervisor', 'Operador', 'Cliente']
    let est = ['Disponible', 'Ocupado']
    for (let i = 0; i <4; i++) {
      await queryInterface.bulkInsert('perfils', [{
        descripcion: desc[i],
        estado: est[Math.random(2)],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perfils', null, {});
  }
};
