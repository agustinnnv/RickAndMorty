const http = require('http')
const characters = require("./Utils/data")

const PORT = 3001
http
.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    // /rickandmorty/character/:id /rickandmorty/characters
    const url = req.url.split("/");
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];
    console.log(url)
    if(param1 === "rickandmorty" && param2 === "characters"){  // /rickandmorty/characters
    }
    if(param1 === "rickandmorty" && param2 === "character"){  // /rickandmorty/character/:id
    }
    res.end("Hola rickosos");
}).listen(PORT, () => {
    console.log("in port http://localhost:3001")
})