// File: database.js

const mongoose = require('mongoose');

// MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/myDatabase'; // Replace with your DB URI

// Function to connect to the database
async function connectToDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true, // Parse MongoDB connection string
            useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
            useCreateIndex: true, // Ensure indexes are created automatically
            useFindAndModify: false, // Use native `findOneAndUpdate()` instead of deprecated methods
        });
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure
    }
}

// Export the connection function
module.exports = connectToDatabase;
