'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('master_type_jabatans', {
      id_type_jabatan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_type_jabatan_s: {
        type: Sequelize.STRING
      },
      nama_type_jabatan_f: {
        type: Sequelize.STRING
      },
      kode_eselon: {
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
    return queryInterface.dropTable('master_type_jabatans');
  }
};