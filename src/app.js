import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import sestsRoutes from "./routes/sets.routes.js";

const app = express();

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
