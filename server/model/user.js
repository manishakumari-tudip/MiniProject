var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
	  id : { 
	  	      type:Number
            },

     name:{
     	      type:String ,
             require:true 

     	  },

     email:{
     	 type:String ,
     	 unique:true,
     	 require:true
     	  },

     password:{
     	    type:String ,
     	    require:true
      },

    
   });

module.exports = mongoose.model('User',userSchema);