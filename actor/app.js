var express = require('express');
var app = express();

app.use(express.bodyParser());

var actor=[];

actor.push({
	id:1,
	name:'Aishwarya Rai',
	country:'India'
});
actor.push({
	id:2,
	name:'Deepika Padukone',
	country:'Indian'
});
var id=3;

app.use('/', express.static(__dirname + '/public'));

app.get('/list', function (req, res) {
   console.log("GET request");
   res.setHeader('Content-Type', 'application/json');
   res.send( JSON.stringify(actor) );
})

app.post('/', function (req, res) {
    console.log("POST request");
    var actress_name=req.body.name;
    var obj = actor.find(o => o.name ===actress_name );
    var idx = actor.indexOf( obj );

    actor[idx].details=req.body.name   

    actor.push({
        id:id,
        name:req.body.name,
        Country:req.body.country
    })
    id++;
   res.setHeader('Content-Type', 'application/json'); 
   res.send( JSON.stringify(actor) );
})

app.put('/name', function (req, res) {
     console.log('put request');
     var actress_name=req.body.name;
     var obj = actor.find(o => o.name ===actress_name );
     var idx = actor.indexOf(obj);
     actor[idx].details=req.body.detail;
});


app.delete('/delete', function (req, res) {
    console.log("DELETE request");
    var actress_name=req.body.name;
    var obj = actor.find(o => o.name ===actress_name );
    var idx = actor.indexOf(obj);
    actor.splice(idx, 1);
    res.send('sucessful delete');
})

var server = app.listen(8080, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("actor app started at http://%s:%s", host, port)
})