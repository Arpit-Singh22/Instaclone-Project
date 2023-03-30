const mongoose = require('mongoose')
require('dotenv').config()

const dbConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB is connected`)
    } catch (error) {
        console.log(error.message);
    }
}
dbConfig()
