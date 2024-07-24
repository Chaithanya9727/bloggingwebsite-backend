
// const mongoose = require('mongoose');

// const connectDB = async () => {

//     try {
//         console.log('connecting to database...');

//         //Connect to the DataBase
//         await mongoose.connect(process.env.DB_URL);

//     } catch (err) {
//         console.log('Error Occurred connecting to database: ', err);
//     }
// }
// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        //console.log('MongoDB connected');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;
