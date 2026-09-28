import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes.js';
dotenv.config();
const app = express();
app.use(express.json());
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL, {
            dbName: "spotifyDB",
        });
        console.log('DB is connected');
    }
    catch (error) {
        console.log(error);
    }
};
app.get('/', (req, res) => {
    res.send('Server is runing');
});
app.use('/api/v1', userRoute);
const PORT = process.env.PORT || 4600;
const StartServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log('server is runing', PORT);
    });
};
StartServer();
//# sourceMappingURL=index.js.map