const axios = require("axios");
const router = require("express").Router();

router.route("/").get(
  (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then((data) => res.json(data.data.items))
    .catch(err => {res.status(422).json(err); console.log(err)});

// .then((data) => {
//         console.log(req.query)
//         // console.log(data.data)
//         res.json(data)
//     }){ data: { results } }
//     .catch(err => res.status(422).json(err));
});

module.exports = router;


// router.get("/", (req, res) => {
//   axios
//     .get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA2iRohBRsT2oCnBQHgmGchr5rz6c75f8A")
//     .then((data) => {
//         console.log(data.data.items)
//         res.json(data.data.items)
//     })
//     .catch(err => res.status(422).json(err));
// });