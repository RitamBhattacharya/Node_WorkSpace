const mongoose = require('mongoose');

async function main() {

    // Connecting to MongoDB Database
    const uri = "mongodb://localhost:27017/nodepractise";
    await mongoose.connect(uri, { 
        maxPoolSize: 10,
        minPoolSize: 5
    });
    console.log("Connected to MongoDB");

    // Creating the Schema
    const userSchema = new mongoose.Schema({
        username: { type: String, required: true },
        userage: Number,
        userjob: String
    });

    // Creating Model
    const User = mongoose.model("User", userSchema);

    // Start a session for transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Retrieve all users from the collection within the transaction
        const users = await User.find({}); 
        console.log("All Users:", users);

        // Commit the transaction
        await session.commitTransaction();
        console.log("Transaction committed successfully.");
    } catch (error) {
        // Abort the transaction in case of an error
        await session.abortTransaction();
        console.error("Transaction aborted due to an error:", error);
    } finally {
        // End the session and close the connection
        session.endSession();
        await mongoose.connection.close();
        console.log("Connection closed.");
    }
}

// Run the async function
main().catch(err => console.error("Error in main function:", err));
