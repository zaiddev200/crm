import express from 'express';
import dotenv from "dotenv"
import connectDb from './config/db.js';
import main from './routes/route.js';

dotenv.config()

const app = express();
connectDb()

const PORT = process.env.PORT || 3000

app.use(express.json())

main(app)

app.listen(PORT , () =>{
    console.log("Server is listening on port " + PORT);
    
})
