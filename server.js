
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


const init = async () => {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
}

init();