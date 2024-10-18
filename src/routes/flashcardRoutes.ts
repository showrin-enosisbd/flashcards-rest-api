import express from "express";
import {
    createFlashcardHandler,
    getFlashcardHandler,
} from "../controllers/flashcardController";

const router = express.Router();

router.post("/", createFlashcardHandler);
router.get("/:id", getFlashcardHandler);

export default router;
