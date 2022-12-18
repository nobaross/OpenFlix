const db = require("../../models");
const Title_genre= db.title_genre;
const fs = require("fs");
const csv = require("fast-csv");
const uploadTitle_genre = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let title_genre=[];
    let path = __basedir + "/openwork4/samples/csv/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        title_genre.push(row);
        //console.log(title_genre);
      })
      .on("end",()=>{
        Title_genre.bulkCreate(title_genre)
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
const getTitle_genre = (req, res) => {
    Title_genre.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving title_genre",
      });
    });
};
module.exports = {
  uploadTitle_genre,
  getTitle_genre
};