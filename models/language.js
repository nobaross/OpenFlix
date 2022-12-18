'use strict';
module.exports = (sequelize,DataTypes)=>{
  const language =sequelize.define('language',{
    language_id: DataTypes.STRING,
    language_name: DataTypes.STRING
  },{});
 
  return language;
};
 

    

 