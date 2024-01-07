require('dotenv').config()
require('express-async-errors')
const express=require('express')
const connectDB = require('./db/connecct')
const app=express()
const PORT=process.env.PORT || 5000

const cors=require('cors')
const errorHandlerMiddleware=require('./middlewares/error-handler')


const movieRouter=require('./routes/movieRoutes')
const reviewRouter=require('./routes/reviewRoutes')


app.use(cors())
app.use(express.json())
app.use(errorHandlerMiddleware)



app.use('/movies',movieRouter)
app.use('/review',reviewRouter)


app.get('/',(req,res)=>{
    res.send('Welcome to the movie app')
})


const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
            console.log(`Server listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
