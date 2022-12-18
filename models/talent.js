'use strict';
module.exports = (sequelize,DataTypes)=>{
  const talent =sequelize.define('talent',{
    talent_id: DataTypes.STRING,
talent_name: DataTypes.STRING,
birth_year: DataTypes.INTEGER,
death_year: DataTypes.INTEGER,
title_principal_title_id: DataTypes.STRING,
title_principal_talent_id: DataTypes.STRING,
title_principal_ord: DataTypes.STRING
  },{});
  talent.associate = function(models) {
    // associations can be defined here
    talent.hasMany(models.talent_role,{foreignKey:'talent_id'});
  };
  talent.associate = function(models) {
    // associations can be defined here
    talent.belongsTo(models.talent_title,{foreignKey:'talent_id'});
  };
  return talent;
};

