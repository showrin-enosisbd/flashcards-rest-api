import dynamoDB from "../config/dynamoDB";
import { Flashcard, tableName } from "../models/flashcardModel";

export const createFlashcard = async (flashcard: Flashcard) => {
    const params = {
        TableName: tableName,
        Item: flashcard,
    };
    await dynamoDB.put(params).promise();
};

export const getFlashcards = async () => {
    const params = {
        TableName: tableName,
    };
    const result = await dynamoDB.scan(params).promise();

    return result.Items;
};

export const getFlashcardByID = async (flashcardID: string) => {
    const params = {
        TableName: tableName,
        Key: { flashcardID },
    };
    const result = await dynamoDB.get(params).promise();

    return result.Item;
};
