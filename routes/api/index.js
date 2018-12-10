const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const apiRoutes = require("./recipe");


//const recipeRoutes = require("./recipe");


// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);

//router.use("/../../pages/Apisample", apiRoutes);
router.use("/recipe", apiRoutes);

module.exports = router;
