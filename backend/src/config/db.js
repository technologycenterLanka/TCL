import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb+srv://technologycenter:Lanka%401Tech@abe.qx9ye5x.mongodb.net/atlantic_bridge?appName=ABE";
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
