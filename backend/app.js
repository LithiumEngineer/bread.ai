const express = require('express');
const mongoose = require('mongoose');
const Food = require('./models/food');
const User = require('./models/user');

const app = express();

const dbURI = 'mongodb+srv://bread-user:bread-ai-user-password@bread.7zs3v9c.mongodb.net/bread-data?retryWrites=true&w=majority&appName=bread';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result => app.listen(3000)))
    .catch((err) => console.log("noo"))

/*app.listen(3000);*/

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

app.get('/add-smth', (req, res) => {
    const newFood = new Food({
        name: 'orange',
        expirationDate: 5,
        amount: 2,
        amountType: 'individual'
    });

    //saves the food
    newFood.save()
        .then((result => {
            res.send(result);
        }))
        .catch((err) => {
            console.log(err);
        })
})

app.post('/add-user', (req, res) => {
    console.log("hi");
    const newUser = new User({
        username: req.body.name,
        userId: "hasdf"
    });

    //saves the food
    newUser.save()
        .then((result => {
            res.send(result);
            res.redirect('/adfasdf');
        }))
        .catch((err) => {
            res.send("endme");
            console.log(err);
        })
})

app.get('/', (req, res) => {
    //res.send("ok");
    res.send('<div><form action="/add-user" method="POST"><input type="text" name="name"></input><input type="submit"></input></form><p>hi</p></div>');
});

//final 404, it wasn't anything that we know
/*app.use((req, res) => {
    res.status(404).send("404 you're bad");
});*/
