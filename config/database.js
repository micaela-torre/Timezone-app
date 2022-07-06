const mongoose = require('mongoose');
const uri = 'mongodb+srv://micaela-torre:Holamica19@cluster0.xkfzg.mongodb.net/?retryWrites=true&w=majority';
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('database connected'))
    .catch(error => console.log(error));
