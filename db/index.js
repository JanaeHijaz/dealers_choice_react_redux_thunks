const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-react-redux');

const Habit = sequelize.define('habit', {
    habitName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    category: {
        type: Sequelize.ENUM(["Physical Health", "Mental Health", "Community", "General"]),
        defaultValue: "General"
    },
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

const syncAndSeed = async () => {
        await sequelize.sync({ force: true });
        await Habit.create({habitName: 'Daily Exercise', category: 'Physical Health', completed: false});
        await Habit.create({habitName: 'Eat Something Green', category: 'Physical Health', completed: false});
        await Habit.create({habitName: 'Get Some Fresh Air', category: 'Physical Health', completed: false});
        await Habit.create({habitName: 'Sit for 10 Min. Meditation', category: 'Mental Health', completed: false});
        await Habit.create({habitName: 'Journal Your Thoughts', category: 'Mental Health', completed: false});
        await Habit.create({habitName: 'Put Your Phone Away', category: 'General', completed: false});
        await Habit.create({habitName: 'Floss!', category: 'Physical Health', completed: false});
        await Habit.create({habitName: 'Call a Loved One to Catch Up', category: 'Community' , completed: false});
        await Habit.create({habitName: 'Spend Time With a Friend (in person, not online!)', category: 'Community', completed: false});
        await Habit.create({habitName: 'Take Your Vitamins', category: 'Physical Health', completed: false});
        await Habit.create({habitName: 'Listen to your Favorite Music', category: 'General', completed: false});
        await Habit.create({habitName: 'Express Gratitude', category: 'General', completed: false});
        await Habit.create({habitName: 'Do Your Skincare Routine', category: 'Physical Health', completed: false});
        await Habit.create({habitName: 'Read for 30 Minutes (not online!)', category: 'General', completed: false});
};
   
module.exports = {
    Habit,
    syncAndSeed
}
