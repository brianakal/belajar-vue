'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('master_jabatan', {
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
        type: Sequelize.DATEONLY
      },
      tanggal_jabatan_selesai: {
        type: Sequelize.DATEONLY
      },
      kode_jenis_jabatan: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      created_date: {
        type: Sequelize.DATE
      },
      modified_by: {
        type: Sequelize.STRING
      },
      modified_date: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('master_jabatans');
  }
};