'use strict';
module.exports = (sequelize,DataTypes)=>{
  const region =sequelize.define('region',{
    region_id: DataTypes.STRING,
    region_name: DataTypes.STRING
  },{});
  return region;

};


