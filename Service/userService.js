var  user=require('../Models/user.js');

class UserService {



static getAll(cb) {

user.find({}, function (err, users) {
        if (err) throw  err;
       console.log(users);

        cb(users);
    });

};

}





module.exports = UserService;