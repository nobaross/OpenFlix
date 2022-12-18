'use strict';
module.exports = (sequelize,DataTypes)=>{
  const title_episode = sequelize.define('title_episode',{
    title_id: DataTypes.STRING,
    parent_title_id: DataTypes.STRING,
    season_number: DataTypes.INTEGER,
    episode_number: DataTypes.INTEGER,
    title_title_id: DataTypes.STRING
  },{});
  
  return title_episode;
};