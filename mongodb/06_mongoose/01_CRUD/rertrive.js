const mongoose = require('mongoose');

async function main() {

    // Connecting to MongoDB Database
    const uri = "mongodb://localhost:27017/nodepractise";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    // Creating the Schema
    const userSchema = new mongoose.Schema({
        username: { type: String, required: true },
        userage: Number,
        userjob: String
    });

    // Creating Model
    const User = mongoose.model("User", userSchema);

    // Retrieve all users from the collection
    try {
        const users = await User.find({}); 
        console.log("All Users:", users);
    } catch (error) {
        console.error("Error fetching users:", error);
    } finally {
        // Closing the connection
        await mongoose.connection.close();
        console.log("Connection closed.");
    }
}

// Run the async function
main().catch(err => console.error("Error in main function:", err));