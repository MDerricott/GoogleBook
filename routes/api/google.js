const axios = require("axios");
const router = require("express").Router();

router.route("/").get(
  (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then((data) => res.json(data.data.items))
    .catch(err => res.status(422).json(err));


});

module.exports = router;
