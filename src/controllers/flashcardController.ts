import { Request, Response } from "express";
import {
    createFlashcard,
    getFlashcardByID,
    getFlashcards,
} from "../services/flashcardService";

export const createFlashcardHandler = async (req: Request, res: Response) => {
    try {
        await createFlashcard(req.body);
        res.status(201).send("Flashcard created");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating flashcard");
    }
};

export const getFlashcardsHandler = async (req: Request, res: Response) => {
    try {
        const flashcards = await getFlashcards();

        res.json(flashcards);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching flashcard");
    }
};

export const getFlashcardByIDHandler = async (req: Request, res: Response) => {
    try {
        const flashcard = await getFlashcardByID(req.params.id);
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
