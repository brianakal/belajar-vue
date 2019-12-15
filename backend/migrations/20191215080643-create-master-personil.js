'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('master_personils', {
      npp: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      nama_panggil: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      },
      kode_unit: {
        type: Sequelize.INTEGER
      },
      kode_lokasi_unit: {
        type: Sequelize.INTEGER
      },
      kode_tugas_unit: {
        type: Sequelize.INTEGER
      },
      kode_jabatan: {
        type: Sequelize.INTEGER
      },
      kode_eselon: {
        type: Sequelize.STRING
      },
      kode_jenis_jabatan: {
        type: Sequelize.STRING
      },
      kode_status_pegawai: {
        type: Sequelize.INTEGER
      },
      kode_status_karya_siswa: {
        type: Sequelize.INTEGER
      },
      kode_status_aktif: {
        type: Sequelize.INTEGER
      },
      kode_lokasi_tugas: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      golongan_darah: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      tanggal_pensiun: {
        type: Sequelize.DATE
      },
      email_intranet: {
        type: Sequelize.STRING
      },
      kabupaten_kota: {
        type: Sequelize.STRING
      },
      email_internet: {
        type: Sequelize.STRING
      },
      email_lain: {
        type: Sequelize.STRING
      },
      foto_pegawai: {
        type: Sequelize.STRING
      },
      created_date: {
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
    return queryInterface.dropTable('master_personils');
  }
};