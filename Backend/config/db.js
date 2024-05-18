import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amsrnth2014:Amsrnth202@cluster0.bq9npqd.mongodb.net/BRANDY\'SFASTFOOD').then(()=> console.log('DB Connected'));
}