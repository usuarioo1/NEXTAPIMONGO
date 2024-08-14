import mongoose from "mongoose";
import { connection } from "mongoose";

const conn = {
    isConnected: false
};

const uri = process.env.MONGODB

export async function connectDB() {
    try {
        const db = await mongoose.connect(uri);
        console.log("Database connected successfully:", db.connections[0].name);
        conn.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

connection.on('connected', () => {
    console.log('DB connected');
});

connection.on('error', (error) => {
    console.log('Mongoose connection error:', error);
});
