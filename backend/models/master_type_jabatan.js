'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_type_jabatan = sequelize.define('master_type_jabatan', {
    id_type_jabatan: DataTypes.INTEGER,
    nama_type_jabatan_s: DataTypes.STRING,
    nama_type_jabatan_f: DataTypes.STRING,
    kode_eselon: DataTypes.STRING
  }, {
    underscored: true,
  });
  master_type_jabatan.associate = function(models) {
    // associations can be defined here
  };
  return master_type_jabatan;
};