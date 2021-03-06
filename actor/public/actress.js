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

            var deepika=actor_list.get(2);     //PUT REQUEST
            deepika.set('details','One of best actress');

           /* deepika.save(
				  {details : "Engineer cum actress"},
				  {   validation: false,
				  	  success :newEntry,
					  error: '',
				  }
            );*/

            deepika.save();

            var kriti=actor_list.get(3);
            kriti.save(
				  {details : "Engineer cum actress"},
				  {   validation: false,
				  	  success :newEntry,
					  error: '',
				  }
            );
        }

        function newEntry(){
				actor_list.create({    //POST request
					name: "Yami Gautam",
					country: "India"
				},
				{
                    wait : true,
			        success:deleteOneEntry,
			        error:''
				}
			);
		}

		function  deleteOneEntry() {    //DELETE request
			var kriti=actor_list.get(1);
			kriti.destroy({name:'Kriti Sanoon'});
        }


},1000);


