const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('User', UserSchema);

app.use(express.json());

// Endpoint to get users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
