'use strict';
module.exports = (sequelize, DataTypes) => {
  const tabel_user = sequelize.define('tabel_user', {
    npp: DataTypes.STRING,
    password: DataTypes.STRING,
    group_akses: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    created_by: DataTypes.DATE,
    modified_date: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    active: DataTypes.INTEGER,
    kode_lokasi_tugas: DataTypes.STRING
  }, {
    underscored: true,
  });
  tabel_user.associate = function(models) {
    // associations can be defined here
  };
  return tabel_user;
};