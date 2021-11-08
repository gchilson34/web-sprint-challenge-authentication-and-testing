const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../secret/secret');  





module.exports = (req, res, next) => {
const token = req.headers.authorization
if(token){jwt.verify(token,JWT_SECRET,(error,decoded)=>{
  if(error){next({status:401,message:'invalid token'})}
  else{req.decodedjwt = decoded;
  next()}   
})
}
else{next({status:401,message:'token required'})}

}
