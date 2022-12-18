'use strict';
module.exports = (sequelize,DataTypes)=>{
  const title_aka =sequelize.define('title_aka',{
    title_id: DataTypes.STRING,
    ord: DataTypes.INTEGER,
    aka_title: DataTypes.STRING,
    region_id: DataTypes.STRING,
    language_id: DataTypes.STRING,
    additional_altrvs: DataTypes.STRING,
    its_original_title: DataTypes.INTEGER
  },{});

  return title_aka;
};
