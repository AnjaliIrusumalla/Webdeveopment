const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{

    // const superHero = {
    //     firstName:"Anjali",
    //     lastName:"Irusumalla",
    // };
    // const name="Anjali";
    // res.writeHead(200,{"Content-Type":"text/html"});
    //fs.createReadStream("./linkup-node.html").pipe(res);
    // let html = fs.readFileSync("./linkup-node.html","utf-8");
    // html =html.replace("{{name}}",name);
    //res.end("HEllo World!!!");

    //JSON RESPONSE.
    // res.end(JSON.stringify(superHero));
    //res.end("<h1>Hello World!!!</h1>");

    // res.end(html);

   // res.end(req.url);


   //req.method GET POST PUT DELETE

    if(req.url === "/")
    {
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home page");
    }
    else if(req.url === "/about")
    {
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("About page");
    }
    else if(req.url === "/api")
    {
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({
            firsyName:"Anjali",
            lastName:"Irusumalla"
        }))
    }
    else{
        res.writeHead(404);
        res.end("Page not found");

    }
    
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
});