'use strict';
module.exports = (sequelize,DataTypes)=>{
  const role =sequelize.define('role',{
    role_id: DataTypes.INTEGER,
    role_name: DataTypes.STRING
  },{});
  role.associate = function(models) {
    // associations can be defined here
    role.hasOne(models.talent_role,{foreignKey:'talent_id'});
  };
  return role;

};
