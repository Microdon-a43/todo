import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import tasksRouter from './routers/tasksRouter.js';

dotenv.config();

mongoose.connect(process.env.DB_URL)
.then(() => console.log('Database connected successfully'))
.catch((err) => console.error(err));

const app = express();
app.use(async(req, res, next) => {
  await new Promise ((res)  => {
    setTimeout(res, 300)
  })
  next()
})
app.use(express.json());
app.use(cors());
app.use('/', tasksRouter)

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Server is up on port - ${PORT}`);
});
