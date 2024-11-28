import mongoose from "mongoose";

export const ConnectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Database already connected");
    return;
  }

  try {
    await mongoose.connect('mongodb+srv://athsarab:athsarab1000@cluster0.ik3fe.mongodb.net/todo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database connection failed");
  }
};
