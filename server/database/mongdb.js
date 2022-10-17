import mongoose from "mongoose";

async function connect() {
    await mongoose.connect(
        "mongodb+srv://indranil:Adrit2021@mern.mw3rcn6.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB connection is successful");
}

export default connect;