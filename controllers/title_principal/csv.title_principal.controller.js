const db = require("../../models");
const Title_principal = db.title_principal;
const fs = require("fs");
const csv = require("fast-csv");
const upload_title_principal = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let title_principal=[];
    let path = __basedir + "/openwork4/samples/csv/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        title_principal.push(row);
        //console.log(title_principal);
      })
      .on("end",()=>{
        Title_principal.bulkCreate(title_principal)
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
const getTitle_principal = (req, res) => {
    Title_principal.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving title_principal.",
      });
    });
};
module.exports = {
    upload_title_principal,
  getTitle_principal
};