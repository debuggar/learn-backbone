setTimeout(function () {

		var actress = Backbone.Model.extend({ 
				 defaults:{
					name:'',
					country:'India'
				 },
			     validate: function(attrs, options){

                    document.write("<br>validation true <br>");
				 }
		 });  

		var actressList = Backbone.Collection.extend({  
		     model: actress,
		     url:'list'   
		});  

		var actor_list= new actressList();

		actor_list.fetch({   //GET request
		    reset: true,                
		    success: afterFetching,
		    error: function(){
		    	console.log('some error');
		    }                  
		});

        function afterFetching(){
        	
        	actor_list.forEach(function(model,iteratee,list) {
        		    //document.write( JSON.stringify(model) );
					document.write( model.get('name') +"<br>");
			});
           

          /*  var deepika=actor_list.get(2);     //PUT REQUEST
            deepika.set('details','One of best actress');

            deepika.save();*/

            var kriti=actor_list.get(3);
            kriti.save(
				  {details : "Engineer cum actress"},
				  {   patch : true  }
            );
            console.log( this.syncArgs.method );

        }


},1000);


