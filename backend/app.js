const express = require('express');
const mongoose = require('mongoose');
const Food = require('./models/food')

const app = express();

const dbURI = 'mongodb+srv://bread-user:bread-ai-user-password@bread.7zs3v9c.mongodb.net/bread-data?retryWrites=true&w=majority&appName=bread';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result => console.log("yay")))
    .catch((err) => console.log("noo"))

app.listen(3000);

app.get('/add-smth', (req, res) => {
    const newFood = new Food({
        name: 'apple',
        expirationDate: 5,
        amount: 2,
        amountType: 'individual'
    });

    newFood.save()
        .then((result => {
            res.send(result);
        }))
        .catch((err) => {
            console.log(err);
        })
})

app.get('/', (req, res) => {
    res.send('<p>home page </p>'); 
});

//final 404, it wasn't anything that we know
app.use((req, res) => {
    res.status(404).send("404 you're bad");
});
