'use strict';
module.exports = (sequelize,DataTypes)=>{
  const title_ratings =sequelize.define('title_ratings',{
    title_id: DataTypes.STRING,
    averageRating: DataTypes.INTEGER,
    numVotes: DataTypes.INTEGER
  },{});
  return title_ratings;
};

   

