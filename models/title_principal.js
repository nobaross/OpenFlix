'use strict';
module.exports = (sequelize,DataTypes)=>{
const title_principal =sequelize.define('title_principal',{
  title_id: DataTypes.STRING,
  talent_id: DataTypes.STRING,
  ord: DataTypes.INTEGER,
  category_id: DataTypes.INTEGER,
  job: DataTypes.STRING,
  role_names: DataTypes.STRING,
  category_category_id: DataTypes.INTEGER,
  title_tile_id: DataTypes.STRING
},{});

return title_principal;
};
