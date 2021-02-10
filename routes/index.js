var express = require('express');
var router = express.Router();


const getGradeInfo = require("../main.js");
router.get('/:sort?', (request,res)=>{
  res.render('index.ejs', {grades:getGradeInfo(request.params.sort), title: 'Оцінки студентів'})

})

module.exports = router;
