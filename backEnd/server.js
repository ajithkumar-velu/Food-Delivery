import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import equipRouter from "./routers/equipRoute.js"
import userRouter from "./routers/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routers/cartRoute.js"
import orderRouter from "./routers/orderRoute.js"



// App config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDb();


//api endpoints
app.use("/api/equip", equipRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://ajith:<password>@cluster0.td0eexi.mongodb.net/?