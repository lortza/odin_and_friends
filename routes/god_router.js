var express = require('express');
var router = express.Router();
const {God, gods_const_from_model} = require('../models/gods_model')

const findGod = (local_var_for_name) => {
  return gods_const_from_model.find(gods_const_from_model => local_var_for_name == gods_const_from_model.name)
}

/* GET home page. */
router.get('/:name', function(req, res, next) {
  const god_var_for_view = findGod(req.params.name)
  res.render('god_view', { god_for_show_page_view: god_var_for_view })
});

module.exports = router