const db = require('../../data/dbConfig')


function findAll(){
    return db('users')
}

function findById(id){
    return db('users')
    .where('id',id)
    .first()
}

async function add(user){
    const id = await db('users').insert(user)
    return findById(id)
}

function findByUser(username){
    return db('users')
    .where('username',username)

}

function passwordValidation(password){
    return db('users')
    .where('password',password)
}


module.exports = {
    findAll,
    findById,
    add,
    findByUser,
    passwordValidation,
}