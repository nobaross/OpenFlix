const db = require("../../models");
const Title = db.title;
const fs = require("fs");
const csv = require("fast-csv");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let title=[];
    let path = __basedir + "/openwork4/samples/csv/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        title.push(row);
        //console.log(titles);
      })
      .on("end",()=>{
        Title.bulkCreate(title)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
        });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
const getTitles = (req, res) => {
  Title.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving title.",
      });
    });
};
const getMaxRatedMovies = (req,res)=>{
  db.sequelize.query(`SELECT primary_title AS movie_title,max(r.averageRating) AS maxRating,x.genre_name
  FROM titles t
  INNER JOIN title_ratings r
  ON t.title_id = r.title_id
  INNER JOIN title_genres g 
  ON t.title_id = g.title_id
  JOIN genres x
  ON x.genre_id = g.genre_id
  GROUP BY x.genre_name;`)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving title.",
    });
  });
 
};
module.exports = {
  upload,
  getTitles,
  getMaxRatedMovies
};
