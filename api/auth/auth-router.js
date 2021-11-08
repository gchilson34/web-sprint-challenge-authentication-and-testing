const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Users = require('../userDataBase/user-model')
const {JWT_SECRET} = require('../secret/secret')
const {checkPayload,  uniqueUsername, loginValidation} = require('../middleware/authmiddleware')

function TokenBuilder(user){
  const payload = {
    subject:  user.id,
    username: user.username
  }
  const options = { expiresIn: '1d'}
  return jwt.sign(payload, JWT_SECRET, options)
}



router.post('/register', uniqueUsername, checkPayload, (req, res, next) => {
  
  res.end('implement register, please!');
const {username , password} = req.body
const hash = bcrypt.hashSync(password, 8);
Users.add({username,password:hash}).then(newUser => {res.status(200).json(newUser)})
.catch(next)
  
});
  




router.post('/login', loginValidation, checkPayload, (req, res,next) => {
  res.end('implement login, please!');
const {username, password} = req.body
Users.findByUser(username).then(([user]) => {
  if(user && bcrypt.compareSync(password, user.password)){
    const token = TokenBuilder(user)
    res.status(200).json({mesage:`Greetings ${username}`,token})
  } else{next({status:401, message:'invalid inputs'})}
}


)
.catch(next)

});
 

module.exports = router;
