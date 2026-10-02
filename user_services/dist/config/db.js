import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "spotifyDb"
        });
        console.log('MONgoose DB connected ✔');
    }
    catch (error) {
        console.log(error);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map