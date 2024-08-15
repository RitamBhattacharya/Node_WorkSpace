const mongoose=require('mongoose');

async function main(){
    //connect to the DataBase
    const uri="mongodb://localhost:27017/nodepractise";
    await mongoose.connect(uri);

    //create the schema
    const userSchema=new mongoose.Schema({
        username:{type:String,required:true},
        userage:Number,
        userjob:String
    });

    //creare model
    const User=mongoose.model("User",userSchema);

    try {
        // save() method

        /*const user = new User({username:"David",userage:18,userjob:"Sales"});
        await user.save();*/


        //create() method

        await User.create([
            {username:"David",userage:18,userjob:"Sales"},
            {username:"Ram",userage:22,userjob:"Guard"}
        ]);
     } catch (error) {
        console.error("Error fetching users:", error);
    } finally {
        // Closing the connection
        await mongoose.connection.close();
        console.log("Connection closed.");
    }
}

main().catch(err => console.error("Error in main function:", err));