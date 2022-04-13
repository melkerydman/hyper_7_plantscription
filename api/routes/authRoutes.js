import express from 'express';
import User from '../models/userModel.js';

async function registerUser(req, res) {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        res.status(200).json({
            status: 'success',
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        console.log('Something went wrong creating a user', err.message);
        res.sendStatus(500);
    }
}

// Routes
const authRoutes = express.Router();

authRoutes.post('/', registerUser);
// Routes to be created
// authRoutes.post("/login", loginUser);

export default authRoutes;
