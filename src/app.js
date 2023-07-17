import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";
import sestsRoutes from "./routes/sets.routes.js";

const app = express();


// Enable CORS - Cross Origin Resource Sharing
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
// Show in console the request type and the route
app.use(morgan("dev"));
// Able convert API request body into JSON format
app.use(express.json());
// Able to read cookies as json in API request
app.use(cookieParser());
// Set the routes for the API
app.use("/api", authRoutes);
app.use("/api", sestsRoutes);

export default app;
