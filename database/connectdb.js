
import mongoose from "mongoose";

try{
    await mongoose.connect(process.env.URI_MONGODB)
    console.log("Connect DB de pana hermanito")
}catch (error) {
    console.log("Error de conexión a mongoDB: " + error)
}