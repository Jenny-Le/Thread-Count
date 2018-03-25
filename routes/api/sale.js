const router = require("express").Router();
const salesController = require("../../controllers/salesController");

// Matches with "/api/books"
router.route("/")
  .get(salesController.findAll)
  .post(salesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(salesController.findById)

module.exports = router;
