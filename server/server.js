const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

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

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    let found = false;

    for(let i = 0; i < database.users.length; i++){
        if(email === database.users[i].email &&
        password === database.users[i].password){
        found = true
        res.json('success')
        }
        if(!found){
            res.status(400).json('error logging in')
        }
    }
})
app.post('/register', (req, res) => {
    const {email, name, password} = req.body;
    database.users.push({
        id : "3",
        name: name,
        email: email,
        password: password
    })
    res.json(database.users[database.users.length-1])

})
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false
    database.users.forEach(user => {
        if(user.id === id){
            found = true
            return res.json(user)
        }
    })
    if(!found){
        res.status(400).json('not found')
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