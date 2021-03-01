import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb",extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

//https://www.mongodb.com/cloud/atlas
const CONNECTION_URL ='mongodb+srv://memories_123:memories@123@cluster0.6vsx6.mongodb.net/memoriesDatabase'; 
         //from mongodb atlas cluster(connect)
const PORT = process.env.PORT ||  5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);