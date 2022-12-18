'use strict';
module.exports = (sequelize,DataTypes)=>{
  const title_genre =sequelize.define('title_genre',{
    title_id: DataTypes.STRING,
    ord: DataTypes.INTEGER, 
    genre_id: DataTypes.INTEGER
  },{});

  return title_genre;
};

   