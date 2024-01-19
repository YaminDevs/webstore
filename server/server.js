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

app.get('/', (req, res) => {
    res.json(postgres.users)
})

app.post('/login', async (req, res) => {
    try {
      const loginData = await postgres
        .select('email', 'hash')
        .from('login')
        .where('email', '=', req.body.email);
  
      if (loginData.length === 0) {
        return res.status(400).json('wrong credentials');
      }
  
      const { email, hash } = loginData[0];
      const isValid = await bcrypt.compare(req.body.password, hash);
  
      if (isValid) {
        const userData = await postgres
          .select('*')
          .from('users')
          .where('email', '=', email);
  
        res.json(userData[0]);
      } else {
        res.status(400).json('wrong credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(400).json('unable to login');
    }
  });

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
  
        const user = await trx('users')
          .insert({
            email: email,
            name: name,
            password: hash,
            created: new Date()
          })
          .into('users')
          .returning('*');
  
        res.json(user[0]);
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

app.post('/admin', async (req, res) => {
    try {
      const loginData = await postgres
        .select('email', 'hash')
        .from('admin')
        .where('email', '=', req.body.email);
  
      if (loginData.length === 0) {
        return res.status(400).json('wrong credentials');
      }
  
      const { email, hash } = loginData[0];
      const isValid = await bcrypt.compare(req.body.password, hash);
  
      if (isValid) {
        const userData = await postgres
          .select('*')
          .from('users')
          .where('email', '=', email);
  
        res.json(userData[0]);
      } else {
        res.status(400).json('wrong credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(400).json('unable to login');
    }
  });

  app.post('/items', async (req, res) => {
    try {
        const { name, image, description, price } = req.body;

        const item = await postgres
        .insert({
            name: name,
            image: image,
            description: description,
            price: price
        })
        .into('items')
        .returning('*');
    
        res.json(item[0]);
;
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).json('Error registering user');
      }
  });

app.listen(3000, () => {
    console.log('app is running on port 3000')
})
