const db = require("../../models");
const Talent_title = db.talent_title;
const fs = require("fs");
const csv = require("fast-csv");
const uploadTalent_title = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let talent_title=[];
    let path = __basedir + "/openwork4/samples/csv/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        talent_title.push(row);
        //console.log(talent_title);
      })
      .on("end",()=>{
        Talent_title.bulkCreate(talent_title)
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
const getTalent_title = (req, res) => {
    Talent_title.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving talent_title.",
      });
    });
};
module.exports = {
  uploadTalent_title,
  getTalent_title
};