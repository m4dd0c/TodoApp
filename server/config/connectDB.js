import mongoose from "mongoose";

export const connectDB = async() =>{
   try{
    await mongoose
        .connect(process.env.MONGO_URI, {
            dbName:"TODO"
        })
        console.log("Database Connected")
   }
   catch(e){
        console.log("Database connection failed", e);
   }

    
}