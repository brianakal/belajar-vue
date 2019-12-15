'use strict';
module.exports = (sequelize, DataTypes) => {
  const tabel_role_group = sequelize.define('tabel_role_group', {
    id_role_group: DataTypes.INTEGER,
    akses_group: DataTypes.STRING
  }, {
    underscored: true,
  });
  tabel_role_group.associate = function(models) {
    // associations can be defined here
  };
  return tabel_role_group;
};