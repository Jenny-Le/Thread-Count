const db = require("../models");

//Defining methods for our salesController
module.exports = {
  findAll: function(req, res) {
    db.Sale
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Sale
      .findById(req.params.id)
      .populate('buyer')
      .populate('listing')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Sale
      .create(req.body)
      .then(dbModel => {
        db.User.findOneAndUpdate({_id: dbModel.buyer}, {$push: {sales: dbModel._id}})
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
