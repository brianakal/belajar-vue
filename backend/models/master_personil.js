'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_personil = sequelize.define('master_personil', {
    npp: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    nama_panggil: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    kode_unit: DataTypes.INTEGER,
    kode_lokasi_unit: DataTypes.INTEGER,
    kode_tugas_unit: DataTypes.INTEGER,
    kode_jabatan: DataTypes.INTEGER,
    kode_eselon: DataTypes.STRING,
    kode_jenis_jabatan: DataTypes.STRING,
    kode_status_pegawai: DataTypes.INTEGER,
    kode_status_karya_siswa: DataTypes.INTEGER,
    kode_status_aktif: DataTypes.INTEGER,
    kode_lokasi_tugas: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    golongan_darah: DataTypes.STRING,
    agama: DataTypes.STRING,
    tanggal_pensiun: DataTypes.DATE,
    email_intranet: DataTypes.STRING,
    kabupaten_kota: DataTypes.STRING,
    email_internet: DataTypes.STRING,
    email_lain: DataTypes.STRING,
    foto_pegawai: DataTypes.STRING,
    created_date: DataTypes.DATE,
    modified_date: DataTypes.DATE
  }, {
    underscored: true,
  });
  master_personil.associate = function(models) {
    // associations can be defined here
  };
  return master_personil;
};