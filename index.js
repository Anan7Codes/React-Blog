const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const murl = 'mongodb+srv://Anandhu:anandhu@react-blog-cacd0.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect('mongodb://localhost/admin', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('Yo Boys');
});


app.listen(5000);
