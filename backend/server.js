const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')

const PORT = 7000;
const db = 'mongodb+srv://Batuhan:subaru667@batuhan.ucjhrg3.mongodb.net/restAPI?retryWrites=true&w=majority&appName=Batuhan'

const app = express();

const routesData = require('./routes/data-route');

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');
app.use('/style', express.static('style'));
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.set('views', path.join(__dirname, '../frontend/views'));


app.use(routesData);

app.listen(4000, () => {
    console.log(`Сервер стартовал на порту http://localhost:4000`);
});

mongoose
    .connect(db)
    .then((res) => console.log('DB Connect'))
    .catch((error) => console.log(error))