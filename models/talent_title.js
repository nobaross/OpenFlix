'use strict';
module.exports = (sequelize,DataTypes)=>{
  const talent_title =sequelize.define('talent_title',{
    talent_id: DataTypes.STRING,
    title_id: DataTypes.STRING
  },{});
  talent_title.associate = function(models) {
    // associations can be defined here
    talent_title.hasOne(models.talent,{foreignKey:'talent_id'});
  };
 
  return talent_title;
};
