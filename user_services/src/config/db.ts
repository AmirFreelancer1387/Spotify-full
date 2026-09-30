import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL as string, {
            dbName: "spotifyDB",
        });
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
          throw error;
    }
};


export default connectDB 