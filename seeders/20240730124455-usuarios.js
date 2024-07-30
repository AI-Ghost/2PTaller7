'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let usu = ['dtorrez', 'fsantos', 'nsoto', 'aperez']
    let nom = ['Diana', 'Fio', 'Nashe', 'Abdul']
    let ape = ['Torres', 'Santos', 'Sotomayor', 'Perez']
    for (let i = 0; i < 4; i++) {
      await queryInterface.bulkInsert('usuarios', [{
        usuario: usu[i],
        nombre: nom[i],
        apellido: ape[i],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
