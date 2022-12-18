'use strict';
module.exports = (sequelize,DataTypes)=>{
const content_type = sequelize.define('content_type',{
  content_type_id: DataTypes.INTEGER,
content_type_name: DataTypes.STRING
},{});
content_type.associate = function(models) {
  // associations can be defined here
  content_type.hasMany(models.title,{foreignKey:'content_type_id'});
};
return content_type;
};
