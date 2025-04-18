import { env } from "@/env";

const mongoose = require('mongoose');
const MONGO_URI = env.DB_URL;
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};


const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB disconnected');
    } catch (error) {
        console.error('MongoDB disconnection error:', error);
    }
};

