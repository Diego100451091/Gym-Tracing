import { connect } from "mongoose";
import { MONGODB_URI } from './config';

export const connectDB = async () => {
    try {
        await connect(MONGODB_URI)
        console.log("DB CONNECTION SUCCESFULLY")
    } catch (error) {
        console.error("DB CONNECTION ERROR: ", error);
    }
}