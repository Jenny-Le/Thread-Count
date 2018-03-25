const router = require("express").Router();
const userRoutes = require("./user");
const saleRoutes = require("./sale");
const listingRoutes = require("./listing");

router.use("/users", userRoutes);
router.use("/sales", saleRoutes);
router.use("/listings", listingRoutes);

module.exports = router;
