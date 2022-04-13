import express from 'express';
import User from '../models/userModel.js';

async function createUser(req, res) {
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

async function getUser(req, res) {
    try {
        const userId = req.params.userId;

        res.status(200).json(userId);
    } catch {}
}

// Routes
const userRoutes = express.Router();

userRoutes.post('/', createUser);
userRoutes.get('/:_id', getUser);

export default userRoutes;
