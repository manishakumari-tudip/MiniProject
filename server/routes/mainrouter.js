

var express = require('express');
var router = express.Router();

//var mainrouter = express.Router();
var app = express();

var user = require('./../controller/usercontrol');
var guest = require('./../controller/guestcontrol');
 //register

	router.post('/register',user.register);
	 

	/*    //login
	router.post('/login', user.login);

	 // view Visitor
	router.get('/visitor', guest.viewAll);

	 // Add Visitor
	router.post('/addvisitor',user.addvisitor);

	//delete Visitor
	router.delete('/visitordelete', user.delete);
	module.exports = router;
	 //Update Visitor
	router.post('/visitorUpdate', user.update);

	//view Specific Visitor 
	router.post('/visitorviewspecific', user.SpecificVisitor);

*/

	module.exports = router;


	 router.get('/time',function(req, res, next){
	 	res.send('Time');
	 });
	 