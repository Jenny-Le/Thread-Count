const db = require("../models");

// Defining methods for the listingsController
module.exports = {
  findAll: function(req, res) {
    db.Listing
      .find(req.query)
      .populate('user')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Listing
      .findById(req.params.id)
      .populate('user')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Listing
      .create(req.body)
      .then((dbModel) => {
        db.User.findOneAndUpdate({_id: dbModel.user}, {$push: {listings: dbModel._id}})
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Listing
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Listing
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    db.Listing
      .find({name: new RegExp('^'+req.query.q, "i")})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
