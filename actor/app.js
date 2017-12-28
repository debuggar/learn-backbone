var express = require('express');
var app = express();

app.use(express.bodyParser());

var personality=[];

personality.push({
	id:1,
	name:'A. P. J. Abdul Kalam',
	country:'India'
});
personality.push({
	id:2,
	name:'Barack Obama',
	country:'USA'
})
var id=3;

app.use('/', express.static(__dirname + '/public'));

app.get('/list', function (req, res) {
   console.log("GET request");
   res.send( JSON.stringify(personality) );
})

app.post('/', function (req, res) {
    console.log("POST request");
    personality.push({
        id:id,
        name:req.body.name,
        Country:req.body.country
    })

   res.send( JSON.stringify(personality) );
})

app.delete('/delete', function (req, res) {
   console.log("DELETE request");
   personality=[];
   res.send('DELETED everything');
})

var server = app.listen(8080, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Personality app started at http://%s:%s", host, port)
})