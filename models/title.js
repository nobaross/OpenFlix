'use strict';
module.exports = (sequelize,DataTypes)=>{
const title =sequelize.define('title',{
    title_id:DataTypes.STRING,
    content_type_id: DataTypes.INTEGER,
    primary_title: DataTypes.STRING,
    original_title: DataTypes.STRING,
    is_adult: DataTypes.INTEGER,
   start_year: DataTypes.INTEGER,
    end_year: DataTypes.INTEGER,
    runtime_minutes: DataTypes.INTEGER
},{});
title.associate = function(models) {
    // associations can be defined here
    title.belongsTo(models.content_type,{foreignKey:'content_type_id'});
  };
return title;
};