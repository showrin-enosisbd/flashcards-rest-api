import { DynamoDB } from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const dynamoDB = new DynamoDB.DocumentClient({
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

export default dynamoDB;
