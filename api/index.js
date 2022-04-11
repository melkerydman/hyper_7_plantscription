import express from 'express';
import mongoose from 'mongoose';

const app = express();

const PORT = 8080;

const mongoURL = `mongodb+srv://plantWizard:3OjavOefOZo1yteX@cluster0.enqs6.mongodb.net/plant-subscription?retryWrites=true&w=majority`;

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

app.listen(PORT, console.log(`Server is up and running`));
