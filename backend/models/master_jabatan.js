'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_jabatan = sequelize.define('master_jabatan', {
    kode_jabatan: DataTypes.INTEGER,
    nama_jabatan: DataTypes.STRING,
    nilai_jabatan: DataTypes.INTEGER,
    id_type_jabatan: DataTypes.INTEGER,
    nama_pendek_jabatan: DataTypes.STRING,
    kode_unit: DataTypes.INTEGER,
    status_aktif_jabatan: DataTypes.INTEGER,
    tanggal_jabatan_mulai: DataTypes.DATE,
    tanggal_jabatan_selesai: DataTypes.DATE,
    kode_jenis_jabatan: DataTypes.STRING,
    created_by: DataTypes.DATE,
    created_date: DataTypes.DATE,
    modified_by: DataTypes.DATE,
    modified_date: DataTypes.DATE
  }, {
    underscored: true,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    // define the table's name
    tableName: 'master_jabatan'
  });
  master_jabatan.associate = function(models) {
    // associations can be defined here
  };
  return master_jabatan;
};