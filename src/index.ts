import express from "express";
import dotenv from "dotenv";
import appRoutes from "./routes/appRoutes";

dotenv.config();

const PORT = process.env.PORT || 8032;

const app = express();

app.use(express.json());

appRoutes(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
