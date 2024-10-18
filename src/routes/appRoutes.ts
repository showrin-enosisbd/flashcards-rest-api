import express from "express";
import flashcardRoutes from "./flashcardRoutes";

const appRoutes = (app: express.Application) => {
    app.use("/flashcards", flashcardRoutes);
};

export default appRoutes;
