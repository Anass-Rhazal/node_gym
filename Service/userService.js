var  user=require('../Models/user.js');

class UserService {



getAll(cb) {

user.find( function (err, users) {
        if (err) throw  err;
       console.log(users);

        cb(users);
    });

};




getOne(id,cb) {

user.findById(id, function (err, u) {
        if (err) throw  err;
       console.log(u);

        cb(u);
    });

};



add(data,cb) {

user.create(data, 
        function (err, u) {
            cb(u);
        });

}


update(id,data,cb) {



user.findByIdAndUpdate(id,data,
				function(err, response){
				if(err)  throw err;
				cb(response);
	});



}



delete(id,cb)  {


user.findByIdAndRemove(id,function(err,response){

if(err)  throw err;

cb(response);


});

}




}










module.exports = UserService;