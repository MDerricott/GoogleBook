// const router = require("express").Router();
// const bookRoutes = require("./books");

// // Book routes
// router.use("/books", bookRoutes);

// module.exports = router;


const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoute = require("./google");

// Book routes
router.use("/books", bookRoutes);
router.use("/google", googleRoute);

module.exports = router;