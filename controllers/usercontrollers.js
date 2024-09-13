const users =require('../users.json');
function getALLUsers(req ,res){
    try{

        res.json(users)
    }catch(err){

    }
}
module.exports = {
    getALLUsers
}