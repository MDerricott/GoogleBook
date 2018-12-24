const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA2iRohBRsT2oCnBQHgmGchr5rz6c75f8A")
    .then((data) => {
        console.log(data.data.items)
        res.json(data.data.items)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;






// const axios = require("axios");
// const router = require("express").Router();

// router.get("/search", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// module.exports = router;

