import mongoose from "mongoose";
const connectDB = async () => {
  try {
    console.log("Connecting to Database....");

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    console.log(`\nMongoDB connected...!!`);
  } catch (err) {
    console.error("error :", err.message);
    process.exit(1);
  }
};

export default connectDB;
