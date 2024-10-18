import express from "express";
import {
    createFlashcardHandler,
    getFlashcardByIDHandler,
    getFlashcardsHandler,
} from "../controllers/flashcardController";

const router = express.Router();

router.post("/", createFlashcardHandler);
router.get("/", getFlashcardsHandler);
router.get("/:id", getFlashcardByIDHandler);

export default router;
