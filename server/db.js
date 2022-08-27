

const mongoose = require('mongoose')


const connectDB = async () => {
    try {
       await mongoose.connect('mongodb+srv://admin:Yh9TtHmRk1DBJW4i@mars.bwuf3eh.mongodb.net/test');
       console.log('Db connected')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB;