const Users = require('../userDataBase/user-model')


const checkPayload = (req,res,next) => {
try {
  const {username,password} = req.body
        if(!username || !password){
            res.status(404).json({message: 'need username and password'})    
 } else {req.username = username
req.password = password
next()  }}

catch(err){
    next(err)
}

}

const loginValidation = async (req, res, next) => {
try{  const user = await Users.findByUser(req.body.username);
    const password = await Users.passwordValidation(req.body.password);
    if( !user || !password ) {
       next({ status: 400, message: 'invalid inputs'})
    }

    else { next()}

    
}

catch(err){next(err)}
}




const uniqueUsername = async (req,res,next) => {
try{ const givenUser = await Users.findByUser(req.body.username)
    if(!givenUser.length){next()}
    else{  next({status:401, message:'username taken'})}
}
catch (err) {next(err)}


}

module.exports = {
    checkPayload,
    uniqueUsername,
    loginValidation,
}