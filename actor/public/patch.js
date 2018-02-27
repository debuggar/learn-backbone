setTimeout(function () {

	console.log('function is called ');

	   var x=Backbone.Model.extend();

	   var option= new x;

	   option.set({ d : 4 }); 

	   option.save();

	   /*option.set({id:1,a:1, b:2 , c:3 , d : 4 });

	   option.save();

	   option.save( {b: 2, d: 4}, { patch : true } );*/

},1000);


