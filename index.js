const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const NewPost = require('./models/post')
const sendMail = require('./jsbackend/mail')
const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/fundation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.engine('ejs', engine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') 
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) =>
{
    const posts = await NewPost.find()
    res.render('index', { posts })
})

app.post('/sendEmail', (req, res) =>
{
    sendMail.send(req.body).catch(e => console.log(e))
    res.redirect('/')
})

app.listen(port, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})