const db = require("../../models");
const Title_aka = db.title_aka;
const fs = require("fs");
const csv = require("fast-csv");
const uploadTitle_aka = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let title_aka=[];
    let path = __basedir + "/openwork4/samples/csv/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        title_aka.push(row);
        //console.log(title_aka_title_type);
      })
      .on("end",()=>{
        Title_aka.bulkCreate(title_aka)
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
const getTitle_aka = (req, res) => {
    Title_aka.findAll()
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
  uploadTitle_aka,
  getTitle_aka
};