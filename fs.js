// const { error } = require("node:console");
// const fs = require("node:fs");

// console.log("First");
// const fileContents = fs.readFileSync("./file.txt","utf-8");
// console.log(fileContents);

// console.log("Second");
// fs.readFile("./file.txt","utf-8",(error,data)=>
// {
//     if(error)
//     {
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// });
// console.log("Third");


// fs.writeFileSync("./greet.txt","Hello world!");

// fs.writeFile("./greet.txt","Hello Anjali!",{flag:"a"},(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("File written");
//     }
// });

// const fs=require("node.fs/promises");

// async function readFile()
// {
//     try{
//         const data = await fs.readFile("file.txt","utf-8");
//         console.log(data);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// readline();

// console.log("First");

// fs.readFile("file.txt","utf-8")
//   .then((data)=>console.log(data))
//   .catch((error)=>console.log(error));

// console.log("Second");


const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./file.txt",
{
    encoding:"utf-8",
    highWaterMark: 2,

});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");
readableStream.pipe(writeableStream);
// readableStream.on("data",(chunk)=>{
//     console.log(chunk);
//     writeableStream.write(chunk);
//});

