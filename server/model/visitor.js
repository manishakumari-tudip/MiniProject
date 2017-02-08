var Schema = mongoose.Schema;

var Guest = new Schema

  ({
	id :       { type: Number },
	name:      { type: String, required:true},
	email:     { type: String, required:true},
	password:  { type: String, required:true},
	phone :    { type: Number, },
	details :  {[ intime:  {type:Date, default: Date.now },
	              outtime: {type:Date}
	            ]}

  });

 module.exports = mongoose.model('guest', Guest);

 