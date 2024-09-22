const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

const tasks = require('./data')

app.get('/tasks', (req, res) => {
    res.send(tasks);
})


//start the server
app.listen(8000, () => {
    console.log(`The server is listening....`)
})

