import dotenv from 'dotenv'; 
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Basic  Node.js TypeScript Template");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});