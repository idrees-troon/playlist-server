const mongoose = require('mongoose');

// MongoDB connection string
const MONGO_URI = 'mongodb+srv://idrees:esOb7fQL7lnWZCGi@cluster0.jxi4d.mongodb.net/playlist'; // Replace with your DB URI

// Function to connect to the database
async function connectToDatabase() {
    console.log("trying to connect to database");
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI);
        console.log('✅✅ Successfully connected to MongoDB....');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectToDatabase;
