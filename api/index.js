import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {});
        console.log('Mongo db connected');
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
};

connectDatabase();

app.listen(PORT, () => {
    console.log(`Server is up and running, ${PORT}`);
});
