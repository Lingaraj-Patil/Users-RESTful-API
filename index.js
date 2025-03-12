const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample data 
let users = [
    { id: 1, name: 'Lingaraj Patil', email: 'lingaraj@example.com' },
    { id: 2, name: 'Appu', email: 'appu@example.com' }
];

// Routes

// Get all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        const newUser = { id: users.length + 1, name, email };
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(400).json({ message: 'Invalid input' });
    }
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users[userIndex] = { id: userId, name, email };
        res.status(200).json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
