'use strict';
module.exports = (sequelize,DataTypes)=>{
  const talent_role =sequelize.define('talent_role',{
    talent_id: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    ord: DataTypes.INTEGER
  },{});
  talent_role.associate = function(models) {
    // associations can be defined here
    talent_role.hasMany(models.talent,{foreignKey:'talent_id'});
  };
  talent_role.associate = function(models) {
    // associations can be defined here
    talent_role.belongsTo(models.role,{foreignKey:'role_id'});
  };
  return talent_role;
};


    