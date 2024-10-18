import { Request, Response } from "express";
import { createFlashcard, getFlashcard } from "../services/flashcardService";

export const createFlashcardHandler = async (req: Request, res: Response) => {
    try {
        await createFlashcard(req.body);
        res.status(201).send("Flashcard created");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating flashcard");
    }
};

export const getFlashcardHandler = async (req: Request, res: Response) => {
    try {
        const flashcard = await getFlashcard(req.params.id);
        if (flashcard) {
            res.json(flashcard);
        } else {
            res.status(404).send("Flashcard not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching flashcard");
    }
};
