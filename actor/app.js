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
actor.push({
    id:3,
    name:'Kriti Sanoon',
    country:'Indian'
});

var id=4;

app.use('/', express.static(__dirname + '/public'));

app.get('/list', function (req, res) {
   console.log("GET request");
  /*res.setHeader('Content-Type', 'application/json');
  res.send( JSON.stringify(actor) );*/
     res.send( actor );
})

app.post('/list', function (req, res) {
    console.log("POST request");
    /*var actress_name=req.body.name;
    var obj = actor.find(o => o.name ===actress_name );
    var idx = actor.indexOf( obj );

    actor[idx].details=req.body.name   */

    actor.push({
        id:id,
        name:req.body.name,
        Country:req.body.country
    })
    id++;
   res.setHeader('Content-Type', 'application/json'); 
   res.send( JSON.stringify(actor) );
})

app.put('/list/:id', function (req, res) {
     console.log('Put request');
     var actress_name=req.body.name;
     var obj = actor.find(o => o.name ===actress_name );
     var idx = actor.indexOf(obj);
     actor[idx].details=req.body.details;
     res.send(JSON.stringify(actor));
});


app.delete('/list/:id', function (req, res) {
    console.log("DELETE request");
    var actress_name=req.body.name;
    var obj = actor.find(o => o.name ===actress_name );
    var idx = actor.indexOf(obj);
    if( actress_name=== undefined )
        idx=req.params.id-1;
    actor.splice(idx, 1);
    res.send(actor);
})

var server = app.listen(8080, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("actor app started at http://%s:%s", host, port)
})
