const express = require('express');
const app = express();
const championRoute = express.Router();

// Champion model
let Champion = require('../models/Champion');

// Add Champion
championRoute.route('/champions/create').post((req, res, next) => {
  Champion.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Champions
championRoute.route('/champions').get((req, res) => {
  Champion.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Champion
championRoute.route('/champions/:id').get((req, res) => {
  Champion.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Champion
championRoute.route('/champions/update/:id').put((req, res, next) => {
  Champion.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Champion
championRoute.route('/champions/delete/:id').delete((req, res, next) => {
  Champion.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = championRoute;