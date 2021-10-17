const fs= require('fs');

//blocking ->synchronous 
// const textIn=fs.readFileSync('./txt/abc.txt','utf-8');
// console.log(textIn);
// const textOut=`This is new text that is written in this file .\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/abc.txt',textOut);
// console.log('File written');


//non-blocking way->asynchronous way
fs.readFile('./txt/abc.txt','utf-8',(err,data)=>{
    console.log(data);
    fs.readFile(`./txt/${data}.txt`,'utf-8',(err,data2)=>{
        console.log(data2);
        fs.writeFile('./txt/createdfile.txt','New written data','utf-8',(err)=>{ //delete the file first if it already exist.
            console.log('new file created');
        });
    })
})
console.log('reading the file...')