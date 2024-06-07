import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
export const mongoServer = process.env.MONGO_URL_DESAFIO_5;
mongoose.connect(mongoServer);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

export default db;
