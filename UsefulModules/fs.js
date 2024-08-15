const fs=require('fs')

//read file asynchronously
/*fs.readFile("demo.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString())
    }
})*/


//read file synchronously
/*const fs1=fs.readFileSync('demo.txt');
console.log(fs1.toString())*/


//Write file asynchrnously
/*const str='Hello...\r\n I am from temp.txt \r\n I am write asynchronous operation'
fs.writeFile('temp.txt',str,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log('Write Operation Performed....')
    }
})*/


//Write file synchrnously
/*const str='Hello...\r\n I am from temp.txt \r\n I am write synchronous operation'
try{
    fs.writeFileSync('temp.txt',str);
    console.log('Write Operation Performed...')
}catch(error){
    console.log(error)
}*/


//append file asynchronously
/*const str='Hello...\r\nI am from test.txt\r\nI am Append Asynchronous operation'
fs.appendFile('test.txt',str,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Append Operation Performed...')
    }
})*/


//append file synchronously
/*const str='Hello...\r\nI am from test.txt\r\nI am Append Synchronous operation\r\n'
try {
    fs.appendFileSync('test.txt',str);
    console.log('Synchronous Append Successful...')
} catch (error) {
    console.error(error)
}*/

fs.open('demo.txt','r+',(err,fd)=>{
    if(err){
        console.error(err);
    }else{
        console.log('File Opened Successfully...');
        //rename the file
        fs.rename('demo.txt','new.txt',(err)=>{
            if(err){
                console.error(err);
            }else{
                console.log('File Renamed Successfully...')
                fs.readFile('new.txt',(err,data)=>{
                    if(err){
                        console.error(err);
                    }else{
                        console.log('File Read Successfully...')
                        console.log(data.toString())
                    }
                })
                fs.close(fd,(err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log('File Closed Successfully...')
                    }
                })
            }
        })
    }
    
})