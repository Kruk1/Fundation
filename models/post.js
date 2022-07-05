const { text } = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kruk:matejki88@atlascluster.ndp6p.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const postSchema = mongoose.Schema({
    title: 
    {
        type: String,
        required: true
    },
    text: 
    {
        type: String,
        required: true
    }
})

const NewPost = mongoose.model('NewPost', postSchema)

module.exports = NewPost