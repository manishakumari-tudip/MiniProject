			var express = require('express');
			var mongoose = require('mongoose');

			var bodyParser = require('body-parser');
			var usercontrol = require('./../controller/usercontrol');
			var User = require('./../model/user');
		    var valid = require('emailvalidator');

				  exports.register = function(req, res)
				     {
					    var name = req.body.name ;
					    var pwd = req.body.password;
					    var email = req.body.email ; 	

					   if(name && password && email)
					     {
					       if(valid.validate(email))
					       {

					       	      if(pwd.length >= 6) 
					       	       { 
                                       if(isNaN(name)){

		                                        var user = new User();
				                                 user.name=name;
			                                     user.email= email;
					                              user.password = crypto.createHash('sha1',config.secret).update(req.body.password).digest('base64');     
						                          user.save();
						                         res.send("Data Inserted");
		                                    }
		                            
		                               else{
		                                     res.send("User name contain Number");
		                                   }
		                            }
					       	    else{
					       	 	    res.send("password is too short")
					       	        }
		                       
                             }
					       else{
					       	res.send("Enter valid Email");
					         }

				         } 
				         else
				         {
				         	res.send("Enter All fields.")
				         }
				  };

			/*
				  exports.login = function(req, res)
				   {
				   	 if(req.body.email && req.body.password ){

				     	 }
				     	 else{
			                  res.send("");
				     	     }
				   }
			      
			      */
