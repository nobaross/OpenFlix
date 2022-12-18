const db = require("../../models");
const Title_aka_title_type = db.title_aka_title_type;
const fs = require("fs");
const csv = require("fast-csv");
const uploadTitle_aka_title_type = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let title_aka_title_type=[];
    let path = __basedir + "/openwork4/samples/csv/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        title_aka_title_type.push(row);
        //console.log(title_aka_title_type);
      })
      .on("end",()=>{
        Title_aka_title_type.bulkCreate(title_aka_title_type)
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
const getTitle_aka_title_type = (req, res) => {
    Title_aka_title_type.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving title_aka_title_type.",
      });
    });
};
module.exports = {
  uploadTitle_aka_title_type,
  getTitle_aka_title_type
};