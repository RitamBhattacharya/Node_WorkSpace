const bcrypt=require('bcrypt');

async function run(){
    const salt=await bcrypt.genSalt(10);
    console.log(salt);
    
    const pwd='1234';
    const hashed_pwd=await bcrypt.hash(pwd,salt);
    console.log(hashed_pwd);
}

run();