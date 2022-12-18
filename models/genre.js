'use strict';
module.exports = (sequelize,DataTypes)=>{
const genre =sequelize.define('genre',{
  genre_id: DataTypes.INTEGER,
  genre_name: DataTypes.STRING
},{});
return genre;
};


