var express = require('express');

// Here we build the router.
var router = express.Router()
const {gods_const_from_model} = require('../models/gods_model');

// Notice how we're calling get on the router rather than on the application
router.get('/', function(req, res, next) {
  res.render('index_view', { gods_for_index_view: gods_const_from_model });
})

// Finally, we return the router so we can use it in our app.js
module.exports = router