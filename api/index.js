import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

const mongoURL = process.env.MONGO_URL;

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(mongoURL);
        console.log('Mongo db connected');
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
};
connectDatabase();

app.use('/user', authRoutes);

app.listen(PORT, console.log(`Server is up and running`));
