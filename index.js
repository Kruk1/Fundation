const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const NewPost = require('./models/post')
const sendMail = require('./jsbackend/mail')
const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://kruk:matejki88@atlascluster.ndp6p.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
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
    const error = req.query
    const posts = await NewPost.find()
    res.render('index', { posts, error })
})

app.post('/sendEmail', async (req, res) =>
{
    let error = ''
    await sendMail.send(req.body).catch(e => error = e)
    if(error !== '')
    {
        res.redirect('/?sent=false')
    }
    else
    {
        res.redirect('/?sent=true')
    }
})

app.use( async (err, req, res, next) => 
{
    const error = 
    {
        status: err.status = 500,
        message: err.message = 'eeo'
    }
    const posts = await NewPost.find()
    res.status(error.status).render('err', { error, posts })
})

app.use( async (req, res, next) => 
{
    const error =
    {
        status: 404,
        message: 'Not Found'
    }
    const posts = await NewPost.find()
    res.status(error.status).render('err', { error, posts })
})

app.listen(port, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})