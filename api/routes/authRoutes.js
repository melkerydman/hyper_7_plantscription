import express from 'express';
import User from '../models/userModel.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

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

async function userLogin(req, res) {
    try {
        const user = await User.findOne({
            username: req.body.username,
        });
        !user && res.status(401).json('first error');

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
            res.status(401).json('wrong Credentials');

        // const accessToken = jwt.sign(
        //     {
        //         id: user._id,
        //         isAdmin: user.isAdmin,
        //     },
        //     process.env.JWT_SEC,
        //     { expiresIn: '3d' }
        // );
        // const { password, others } = user._doc;

        // res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
}

// Routes
const authRoutes = express.Router();

authRoutes.post('/', registerUser);
// Routes to be created
authRoutes.post('/login', userLogin);

export default authRoutes;
