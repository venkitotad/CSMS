import express from 'express';
import authRouter from './routes/auth.routes.js';
import courseRouter from './routes/course.routes.js';
import categoryRouter from './routes/category.routes.js';
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) =>{
    res.send('this is working')
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/category', categoryRouter);

export default app;