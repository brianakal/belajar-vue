'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('master_unit', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_unit: {
        type: Sequelize.INTEGER
      },
      id_type_unit: {
        type: Sequelize.INTEGER
      },
      nama_unit: {
        type: Sequelize.STRING
      },
      parent_unit: {
        type: Sequelize.INTEGER
      },
      initial_unit: {
        type: Sequelize.STRING
      },
      cost_center: {
        type: Sequelize.STRING
      },
      kode_operasional: {
        type: Sequelize.STRING
      },
      kode_master_jenis_shift: {
        type: Sequelize.STRING
      },
      unit_direktorat: {
        type: Sequelize.STRING
      },
      status_aktif_unit: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('master_units');
  }
};