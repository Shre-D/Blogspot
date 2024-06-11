import express, { Request, Response } from 'express';
import blogRouter from './routers/blogRouter'
import userRouter from './routers/userRouter';
import connectDB from './config/db';
import cors from "cors";

const app = express();

const port: number = 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('The backend for blogspot!');
});

app.use("/blog",blogRouter);
app.use("/user",userRouter);

connectDB()

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

