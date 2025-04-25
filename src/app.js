import express from 'express';
import pool from './db/index.js';
import authRouter from './routes/auth.routes.js';
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) =>{
    res.send('this is working')
})

app.use('/api/v1/auth', authRouter);


export default app;