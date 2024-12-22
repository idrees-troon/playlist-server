const express = require("express");
const app = express();
const path = require("path");

const connectToDatabase = require('./database');

const indexRoutes = require("./routes/script");

app.set("view engine", "ejs"); // Set EJS as the template engine
app.set("views", path.join(__dirname, "views")); // Set views directory

app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Connect to the database
connectToDatabase();
// Use routes
app.use("/", indexRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
