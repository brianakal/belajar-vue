'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tabel_users', {
      npp: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      group_akses: {
        type: Sequelize.INTEGER
      },
      created_date: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.DATE
      },
      modified_date: {
        type: Sequelize.DATE
      },
      modified_by: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.INTEGER
      },
      kode_lokasi_tugas: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tabel_users');
  }
};