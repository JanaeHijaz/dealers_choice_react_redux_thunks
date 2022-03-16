const { Habit, syncAndSeed } = require('./db/index')
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.use(express.static(path.join(__dirname, 'public'))); // do I need this? 

// ------ ROUTES HERE -------------

// GET API route to view all habits
app.get('/api/habits', async(req, res, next) => {
    try{
        const habits = await Habit.findAll();
        res.send(habits);
    }
    catch(error){
        next(error)
    }
});

// POST API route to enter a new habit

app.post('/api/habits', async(req, res, next) => {
    try{
        res.send(await Habit.create(req.body));
    }
    catch(error){
        next(error)
    }
});

// PUT API route to update/modify a habit (if completed) 

app.put('/api/habits/:id', async(req, res, next) => {
    try {
        const habit = await Habit.findByPk(req.params.id);
        await habit.update(req.body);
        res.send(habit);
    }
    catch(error){
        next(error)
    }
});

// DELETE API route to destroy a habit
app.delete('/api/habits/:id', async(req, res, next) => {
    try{
        const habit = await Habit.findByPk(req.params.id);
        await habit.destroy();
        res.sendStatus(204)
    }
    catch(error){
        next(error)
    }
});


const init = async () => {
    await syncAndSeed();
    const port = process.env.PORT || 5050;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
}

init();