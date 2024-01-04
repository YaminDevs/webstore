const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('this works')
})
app.post('/signin', (res, req) => {
    res.json('signin')
})
app.post('/register', (res, req) => {
    res.json('register')
})
app.post('/profile/:userId', (res, req) => {
    res.json('profile')
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