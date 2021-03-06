const router = require("express").Router();
const listingsController = require("../../controllers/listingsController");


router
  .route("/search")
  .get(listingsController.search);

// Matches with "/api/user"
router.route("/")
  .get(listingsController.findAll)
  .post(listingsController.create);

// Matches with "/api/listings/:id"
router
  .route("/:id")
  .get(listingsController.findById)
  .put(listingsController.update)
  .delete(listingsController.remove);



module.exports = router;
