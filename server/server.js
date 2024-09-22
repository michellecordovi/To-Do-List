const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

const tasks = require('./data')

app.get('/tasks', (req, res) => {
    res.send(tasks);
})

app.post('/tasks', (req, res) => {
    let newTask = {
        description: req.query.description,
        completed: req.query.complete === 'true'
    }

    let indexOfQuery = tasks.findIndex(element => element.description === req.query.description)
 
    if (newTask.description && indexOfQuery === -1) {
		tasks.push(newTask);
		res.send();
	} else {
		res.status(404).send("UNABLE TO POST NEW TASK");
	}
})


//start the server
app.listen(8000, () => {
    console.log(`The server is listening....`)
})

