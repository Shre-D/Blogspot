const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("MongoDB is connected");
    } catch (err:any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB
