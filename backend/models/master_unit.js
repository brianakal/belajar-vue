'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_unit = sequelize.define('master_unit', {
    kode_unit: DataTypes.INTEGER,
    id_type_unit: DataTypes.INTEGER,
    nama_unit: DataTypes.STRING,
    parent_unit: DataTypes.INTEGER,
    initial_unit: DataTypes.STRING,
    cost_center: DataTypes.STRING,
    kode_operasional: DataTypes.STRING,
    kode_master_jenis_shift: DataTypes.STRING,
    unit_direktorat: DataTypes.STRING,
    status_aktif_unit: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  master_unit.associate = function(models) {
    // associations can be defined here
  };
  return master_unit;
};