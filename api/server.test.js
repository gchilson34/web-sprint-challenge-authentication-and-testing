const request = require('supertest')
const server = require('./server')

test('sanity', () => {
  expect(true).toBe(false)
})

test('environment',()=>{
  expect(process.env.NODE_ENV).toBe('testing')
})


describe('POST /register', ()=>{
  test('responds with error when no username given',async ()=>{
    const res = await request(server).post('/api/auth/register')
    .send({username:'', password:'ApassWord'})
expect(res.body.toMatchObject({message:'need username and password'}))
  })

test('error when no PW',async ()=>{
  const res = await request(server.post('/api/auth/register')
  .send({username:'username',
          password:''
}))
expect(res.body).toMatchObject({message:'need username and password'})
})

})




describe('POST /login', ()=>{
  test('error when no username', async ()=>{
    const res = await request(server).post('/api/auth/login')
    .send({username:'',
          password:'uniquepassword'})
  expect(res.status).toBe(500)
  })

  test('error when no PW', async ()=>{
    const res = await request(server).post('/api/auth/login')
    .send({username:'NewUsername',
              password:''})
  expect(res.status).toBe(500)
  })



})
