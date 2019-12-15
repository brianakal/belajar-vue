'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('master_jabatans', {
      kode_jabatan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_jabatan: {
        type: Sequelize.STRING
      },
      nilai_jabatan: {
        type: Sequelize.INTEGER
      },
      id_type_jabatan: {
        type: Sequelize.INTEGER
      },
      nama_pendek_jabatan: {
        type: Sequelize.STRING
      },
      kode_unit: {
        type: Sequelize.INTEGER
      },
      status_aktif_jabatan: {
        type: Sequelize.INTEGER
      },
      tanggal_jabatan_mulai: {
        type: Sequelize.DATE
      },
      tanggal_jabatan_selesai: {
        type: Sequelize.DATE
      },
      kode_jenis_jabatan: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.DATE
      },
      created_date: {
        type: Sequelize.DATE
      },
      modified_by: {
        type: Sequelize.DATE
      },
      modified_date: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('master_jabatans');
  }
};