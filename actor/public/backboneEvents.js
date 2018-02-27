/*
var ourObject={};

_.extend( ourObject,Backbone.Events );

ourObject.on('dance',function (argument) {
	console.log('we triggered '+argument);
});

ourObject.trigger('dance','our event');

function dancing(msg){
	console.log('we started '+msg);
}

//Namespace custom event
ourObject.on('dance:tap', dancing);
ourObject.on('dance:break' , dancing );

ourObject.trigger('dance:tap', 'Tap dance'  );
ourObject.trigger('dance:break', 'break dance Yeah');

ourObject.off('dance:break');
ourObject.trigger('dance:tap', 'Tap dance once Again');
ourObject.trigger('dance:break', 'break dance Yeah once Again');*/


/*var ourObject={};

_.extend( ourObject,Backbone.Events );

function jumping(msg){
	console.log('we started jumping '+ msg );
}

function dancing(msg){
	console.log('we are dancing '+msg);
}

ourObject.on('dance',jumping);
ourObject.on('dance',dancing);

ourObject.trigger('dance','Yeah');

ourObject.off('dance',dancing);

ourObject.trigger('dance','Yeah');


var ourObject={};

_.extend( ourObject,Backbone.Events );
*/

/*
var ourObject={};

_.extend( ourObject,Backbone.Events );

function doAction( action , duration ){
	console.log('we are '+action + " for "+duration);
}

ourObject.on('dance',doAction);
ourObject.on('jump',doAction);
ourObject.on('skip',doAction);

ourObject.trigger('dance','Dancing',"5 minutes");

ourObject.trigger('dance jump skip',"on fire","15 minutes" )

*/


var a=_.extend({},Backbone.Events);
var b=_.extend({},Backbone.Events);
var c=_.extend({},Backbone.Events);


a.listenTo(b,'anything',function(event){
	console.log('anything happened');
});

b.listenTo(c,'everything',function(event){
	console.log('everything happened');
})

b.trigger('anything');

a.stopListening();

b.trigger('anything');
c.trigger('everything');























