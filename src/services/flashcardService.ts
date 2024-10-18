import dynamoDB from "../config/dynamoDB";
import { Flashcard, tableName } from "../models/flashcardModel";

export const createFlashcard = async (flashcard: Flashcard) => {
    const params = {
        TableName: tableName,
        Item: flashcard,
    };
    await dynamoDB.put(params).promise();
};

export const getFlashcard = async (flashcardID: string) => {
    const params = {
        TableName: tableName,
        Key: { flashcardID },
    };
    const result = await dynamoDB.get(params).promise();

    return result.Item;
};
