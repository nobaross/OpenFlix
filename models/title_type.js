'use strict';
module.exports = (sequelize,DataTypes)=>{
  const title_type =sequelize.define('title_type',{
    title_type_id: DataTypes.INTEGER,
    title_type_name: DataTypes.STRING
  },{});
  title_type.associate = function(models) {
    // associations can be defined here
    title_type.hasOne(models. title_aka_title_type,{foreignKey:'title_type_id'});
  };
  return title_type;
};