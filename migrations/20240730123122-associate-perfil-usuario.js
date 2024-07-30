'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('perfilusuarios', {
      fields: ['usuario_id'],
      name: 'usuario_id_fk',
      type: 'foreign key',
      references: {
        table: 'usuarios',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });

    await queryInterface.addConstraint('perfilusuarios', {
      fields: ['perfil_id'],
      name: 'perfil_id_fk',
      type: 'foreign key',
      references: {
        table: 'perfils',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('perfilusuarios', 'usuario_id_fk')
    await queryInterface.removeConstraint('perfilusuarios', 'perfil_id_fk')
  }
};
