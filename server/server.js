const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('knex')

const postgres = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'luxora',
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
      await postgres('users')
      .returning('*')
      .insert({
        email: email,
        name: name,
        joined: new Date()
      });
      res.json(database.users[database.users.length - 1]);
    } catch (error) {
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