import * as fs from 'fs';


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}`, "utf-8", (err, data) => {
    if(err){
        res.status(500).json({error: "No such blog found"})    
    }
    res.status(200).json(JSON.parse(data))
  })
}
