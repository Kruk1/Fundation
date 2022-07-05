const mongoose = require('mongoose');
const NewPost = require('./models/post')

mongoose.connect('mongodb://localhost:27017/fundation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const posts = [
    {
        title: 'New Info',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus lectus a magna interdum, eu viverra diam pellentesque. Nulla quis odio finibus, rutrum risus nec, dapibus nibh. Pellentesque mauris lectus, elementum ut venenatis at, accumsan nec dui. In hac habitasse platea dictumst. Nam vitae dapibus enim. Etiam consectetur, lacus non laoreet varius, nibh dui facilisis augue, imperdiet sagittis sem sapien eu magna. Proin ac dapibus mi, quis aliquet nulla. Duis ut gravida mauris. Fusce sed pulvinar tellus. Aenean imperdiet ultricies ultricies.'
    },
    {
        title: 'New team',
        text: 'Nunc eget elit et orci fringilla tristique in non dui. Vestibulum blandit facilisis volutpat. Sed mauris dolor, molestie sed nibh ac, lobortis vulputate magna. Ut sodales feugiat eros, sit amet imperdiet ipsum varius hendrerit. Proin sit amet ultricies ex. Phasellus dictum efficitur nibh a dignissim. Maecenas rutrum viverra accumsan. Donec ipsum nisl, porta in lorem id, scelerisque imperdiet sem. Fusce venenatis commodo lacus, vitae feugiat purus tempor tincidunt. Quisque at tincidunt odio. Nunc ante mi, mattis sed dui nec, rhoncus molestie ante. Phasellus id finibus lectus. Etiam in arcu a nisl tristique imperdiet interdum et massa. Donec viverra lacus non justo euismod dictum.'
    },
    {
        title: 'New therapy',
        text: 'Integer commodo arcu nec ex hendrerit, et pellentesque libero gravida. Proin pulvinar aliquam suscipit. Cras vestibulum finibus nibh, eu facilisis tellus. Vivamus enim sem, vestibulum nec ante ut, tincidunt vulputate nisl. Donec nec condimentum tortor. Integer congue, velit ut congue cursus, tortor elit maximus magna, a venenatis sapien lectus at erat. Donec sagittis vel ex eget eleifend. Ut egestas sodales quam, eget cursus ante luctus eget. Nulla auctor id dolor non rutrum. Aenean feugiat id ex non dictum.'
    }
]

NewPost.deleteMany({})

NewPost.insertMany(posts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})