const express = require("express");
const router = express.Router();
const csvController = require("../controllers/title/csv.controller");
const csv_title_episode_controller = require("../controllers/title_episodes/csv.title_episode.controller");
const csv_content_type_controller =require("../controllers/content_type/csv.content_type.controller");
const csv_title_principal_controller =require("../controllers/title_principal/csv.title_principal.controller");
const csv_title_aka_title_type_controller =require("../controllers/title_aka_title_type/csv.title_aka_title_type.controller");
const csv_title_type_controller =require("../controllers/title_type/csv.title_type.controller");
const csv_talent_controller =require("../controllers/talent/csv.talent.controller");
const csv_talent_title_controller=require("../controllers/talent_title/csv.talent_title.controller");
const csv_talent_role_controller=require("../controllers/talent_role/csv.talent_role.controller");
const csv_role_controller=require("../controllers/role/csv.role.controller");
const csv_category_controller=require("../controllers/category/csv.category.controller");
const csv_title_aka_controller=require("../controllers/title_aka/csv.title_aka.controller");
const csv_language_controller=require("../controllers/language/csv.language.controller");
const csv_region_controller=require("../controllers/region/csv.region.controller");
const csv_title_genre_controller=require("../controllers/title_genre/csv.title_genre.controller");
const csv_title_ratings_controller=require("../controllers/title_ratings/csv.title_ratings.controller");
const csv_genre_controller=require("../controllers/genre/csv.genre.controller");
const upload = require("../middleware/upload");
let routes = (app) => {
  router.post("/title", upload.single("file"), csvController.upload);
  router.get("/title", csvController.getTitles);
  router.get("/title_max_rated_for_each_genre",csvController.getMaxRatedMovies);
  //
  //
  router.post("/title_episode",upload.single("file"),csv_title_episode_controller.upload_title_episode);
  router.get("/title_episode",csv_title_episode_controller.getTitles_episode);
  //
  router.post("/content_type",upload.single("file"),csv_content_type_controller.upload_content_type);
  router.get("/content_type",csv_content_type_controller.get_Content_Type);
   //
   router.post("/title_principal",upload.single("file"),csv_title_principal_controller.upload_title_principal);
   router.get("/title_principal",csv_title_principal_controller.getTitle_principal);
      //
      router.post("/title_aka_title_type",upload.single("file"),csv_title_aka_title_type_controller.uploadTitle_aka_title_type);
      router.get("/title_aka_title_type",csv_title_aka_title_type_controller.getTitle_aka_title_type);
 //
 router.post("/title_type",upload.single("file"),csv_title_type_controller.upload_title_type);
 router.get("/title_type",csv_title_type_controller.getTitle_type);
  //
  router.post("/talent",upload.single("file"),csv_talent_controller.upload_talent);
  router.get("/talent",csv_talent_controller.getTalent);
  //
  router.post("/talent_title",upload.single("file"),csv_talent_title_controller.uploadTalent_title);
  router.get("/talent_title",csv_talent_title_controller.getTalent_title);
  //
  router.post("/talent_role",upload.single("file"),csv_talent_role_controller.uploadTalent_role);
  router.get("/talent_role",csv_talent_role_controller.getTalent_role);
    //
    router.post("/role",upload.single("file"),csv_role_controller.uploadRole);
    router.get("/role",csv_role_controller.getRole);
     //
     router.post("/category",upload.single("file"),csv_category_controller.upload_category);
     router.get("/category",csv_category_controller.get_Category);
       //
       router.post("/title_aka",upload.single("file"),csv_title_aka_controller.uploadTitle_aka);
       router.get("/title_aka",csv_title_aka_controller.getTitle_aka);
        //
        router.post("/language",upload.single("file"),csv_language_controller.upload_language);
        router.get("/language",csv_language_controller.get_Language);
        //
        router.post("/region",upload.single("file"),csv_region_controller.upload_region);
        router.get("/region",csv_region_controller.get_Region);
                //
                router.post("/title_genre",upload.single("file"),csv_title_genre_controller.uploadTitle_genre);
                router.get("/title_genre",csv_title_genre_controller.getTitle_genre);
                 //
                 router.post("/title_ratings",upload.single("file"),csv_title_ratings_controller.upload_title_ratings);
                 router.get("/title_ratings",csv_title_ratings_controller.getTitle_ratings);
                   //
                   router.post("/genre",upload.single("file"),csv_genre_controller.upload_genre);
                   router.get("/genre",csv_genre_controller.get_Genre);
      app.use("/api/csv", router);
};
module.exports = routes;