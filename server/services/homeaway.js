var https = require('https');

const token = 'NmU3ODBmYjgtOGExNS00ZDc1LWIzODYtOGUzMjY3N2JjY2Zi';

function searchHomes(options, cb) {
  https.get(options, function(res){
    var body = '';

    res.on('data', function(chunk){
      body+= chunk;
    });

    res.on('end', function(){
      var result = JSON.parse(body);
      cb(null, result);
    });

    res.on('error', cb);
  })
  .on('error', cb)
  .end();

}

var options = {
  method: 'GET',
  headers: {'Authorization': 'Bearer ' + token },
  host: 'ws.homeaway.com',
  path: '/public/search?q=LosAngeles',
  dataType: 'json'
};

searchHomes(options, function(err, result) {
  if(err) {
    return console.log('An error occurred while making api request to search homes');
  }
  else {
    console.log(result);
  }
});


// getHomes(options, function(err, result){
//   if (err) {
//     return console.log('An error occurred retrieving homes');
//   }
//
//   else {
//     console.log(result);
//   }
// });
