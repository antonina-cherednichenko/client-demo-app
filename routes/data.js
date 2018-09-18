const _ = require("lodash");
const express = require("express");
const router = express.Router();
const dataService = require("../services/data");

/**
 * A home landing page
 */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Blockchain" });
});


router.post("/api/save/", function(req, res) {
  let {field1, field2} = req.body;
  if (_.isNil(field1) || _.isNil(field2)) {
    return res.json(400, "Specify all data fields");
  }

  dataService.saveClientData({field1, field2}).then(data => res.json(data))
   .catch(error => res.json(500, error));
});

module.exports = router;
