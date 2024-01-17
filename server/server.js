const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('knex')
const bcrypt = require('bcryptjs')




const postgres = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'luxora'
    }
})


const app = express()
app.use(bodyParser.json())
app.use(cors())

const database = {
    users: [
        {
            id : "1",
            name : "brian",
            email : "brian@gmail.com",
            password : "ghetto"
        },
        {
            id : "2",
            name : "Laura",
            email : "laura@gmail.com",
            password : "fresh"
        }
    ]
}


app.get('/', (req, res) => {
    res.json(database.users)
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    let found = false;

    for(let i = 0; i < database.users.length; i++){
        if(email === database.users[i].email &&
        password === database.users[i].password){
        found = true
        res.json('success')
        break;
        }
        if(!found){
            res.status(400).json('error logging in')
        }
    }
})
app.post('/register', async (req, res) => {
    try {
      const { email, name, password } = req.body;
      const saltRounds = 10;
  
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
  
      await postgres.transaction(async (trx) => {
        await trx
          .insert({
            hash: hash,
            email: email
          })
          .into('login')
          .returning('email');
  
        await trx('users')
          .insert({
            email: email,
            name: name,
            password: hash,
            created: new Date()
          })
          .into('users')
          .returning('*');
  
        res.json(newUser[0]);
      });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(400).json('Error registering user');
    }
  });
  
  
app.get('/profile/:id', async (req, res) => {
    const { id } = req.params;
        await postgres.select('*').from('users').where({
            'id': id
        })
        if(user.length){
            res.json(user[0])
        }else{
            res.status(400).json('user not found')
        }
})

app.post('/admin', (req, res) => {
    res.json('admin')
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
})



/*
/ --> res = homepage
/signin --> POST = succes/fail
/register --> POST = user
/profile/:userId --> GET = user
*/