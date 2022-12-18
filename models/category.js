'use strict';
module.exports = (sequelize,DataTypes)=>{
const category=sequelize.define('category',{
  category_id: DataTypes.INTEGER,
  category_name: DataTypes.STRING
},{});
return category;
};


   
