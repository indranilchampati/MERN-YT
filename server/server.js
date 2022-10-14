import express from "express";
import mongoose from 'mongoose';
import cors from 'cors'

const PORT = 4000
const app = express();

app.use(cors);
//connection with mongo
await mongoose.connect(
    "mongodb+srv://indranil:Adrit2021@mern.mw3rcn6.mongodb.net/?retryWrites=true&w=majority"
)
console.log("Connection with mongo is succesfully done")



app.get("/", (req, res) => {
    res.send("Hello World");

});
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:4000');
});