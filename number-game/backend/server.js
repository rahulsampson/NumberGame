import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express()
app.use(cors())
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://rahulerasmus1:mq7mRG97T2c29wuq@cluster0.9y2xkwb.mongodb.net/NumberGame?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Mongodb connected"))
.catch((err) =>  console.log("Error :: Server : ", err));

const userSchema = new mongoose.Schema(
    {
        username : String,
        email: String,
        password: String
    }
)

const userModel = mongoose.model("user",userSchema)

app.get("/api/user", async(req,res) => {
    const user = await userModel.find();
    res.json(user);
})

app.post('/api/user', async (req,res) => {
    await userModel.create(req.body)
})

app.post("/api/user/auth", async (req,res) => {
    const user = await userModel.findOne(req.body)
    if(user) {
        res.json(user)
    }

})

const port = "3000"

app.listen(port,() => {
    console.log(`server started on http://localhost:${port}`)
})