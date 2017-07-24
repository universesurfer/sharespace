var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});


//TRYING TO PASS PARAMS FROM ANGULAR TO NODE
// router.post('/', function(req, res, next) {
//   var location = req.body.trip.location;
//   var dates = req.body.trip.dates;
//   var guests = req.body.trip.guests;
//     res.json({'status': 200, 'msg': 'success'});
//     console.log('Successful search params in server', location, dates, guests);
// });
//


router.get('/', function(req,res,next){
   var location = req.query.trip.location;
   var dates = req.query.trip.dates;
   var guests = req.query.trip.guests;

  res.json({
    'status': 200,
    'msg': 'success'
  });
  console.log('Successful search params in server', location, dates, guests);
});


module.exports = router;
