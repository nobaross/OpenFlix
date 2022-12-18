const db = require("../../models");
const Talent_role = db.talent_role;
const fs = require("fs");
const csv = require("fast-csv");
const uploadTalent_role = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let talent_role=[];
    let path = __basedir + "/openwork4/samples/csv/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        talent_role.push(row);
        //console.log(talent_role);
      })
      .on("end",()=>{
        Talent_role.bulkCreate(talent_role)
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
const getTalent_role = (req, res) => {
    Talent_role.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving talent_role.",
      });
    });
};
module.exports = {
  uploadTalent_role,
  getTalent_role
};