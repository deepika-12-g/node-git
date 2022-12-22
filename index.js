// const fs = require('fs/promises');
// const express = require('express');
// const cors = require('cors');
// const _ = require('loadash');
// const {v4:uuid} = require('uuid');
// const exp = require('constants');
// const app = express();
// app.use(express.json());
// app.use(express.cors());
// app.get("/outfit",(req,res)=>{
//     const jeans = ["black","red","yellow","purple"];
//     const shirt = ["white","blue","blackshite","skyblue"];
//     const shoes=["puma", "addidas","flyyingmachine","baata"];
//    res.json({
//     jeans:_.sample(jeans),
//     shirt:_.sample(shirt),
//      shoes:_.sample(shoes),
//    });
// });
// app.get("comments/:id", async(req,res)=>{
//     const id = req.params.id;
//     let content;
//         try{
//             content = await fs.readFile('data/comments/$id.txt',"utf-8");
//         }
      
//    catch{
//          return res.sendStatus(404);
//    }
//    res.json({content:content});
// })
const name = require('./app.js');
console.log(name);
