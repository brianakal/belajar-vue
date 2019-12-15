'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_status_aktiv = sequelize.define('master_status_aktiv', {
    kode_status_aktif: DataTypes.INTEGER,
    nama_status_aktif: DataTypes.STRING
  }, {
    underscored: true,
  });
  master_status_aktiv.associate = function(models) {
    // associations can be defined here
  };
  return master_status_aktiv;
};