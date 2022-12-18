'use strict';
module.exports = (sequelize,DataTypes)=>{
const title_aka_title_type =sequelize.define('title_aka_title_type',{
  title_id: DataTypes.STRING,
  title_type_id: DataTypes.INTEGER,
  ord: DataTypes.INTEGER,
  title_title_id: DataTypes.STRING
},{});
title_aka_title_type.associate = function(models) {
  // associations can be defined here
  title_aka_title_type.belongsTo(models.title_type,{foreignKey:'title_type_id'});
};
return title_aka_title_type;
};

