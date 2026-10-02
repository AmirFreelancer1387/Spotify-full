import express from 'express'
import userRoute from './routes.js'
import connectDB from './config/db.js';

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Server is runing')
})

app.use('/api/v1',userRoute)

const PORT = process.env.PORT || 4600

const StartServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log('server is runing', PORT)
        
    })
}

StartServer()