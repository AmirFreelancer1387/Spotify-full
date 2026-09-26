import express from 'express'

const app = express()

const PORT = 500

app.listen(PORT, ()=>{
    console.log('is runing',PORT)
})