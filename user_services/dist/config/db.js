import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL, {
            dbName: "spotifyDB",
        });
        console.log('DB is connected');
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map