const router = require("express").Router();
const salesController = require("../../controllers/salesController");

// Matches with "/api/sale"
router.route("/")
  .get(salesController.findAll)
  .post(salesController.create);

// Matches with "/api/sale/:id"
router
  .route("/:id")
  .get(salesController.findById)

module.exports = router;
