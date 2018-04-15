const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport');

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route('/login')
  .post(passport.authenticate('local'), function (req, res) {
    req.session.save((err) => {
      if (err) {
        return next(err);
      }
    });
    res.json({user: req.user})
  });


module.exports = router;