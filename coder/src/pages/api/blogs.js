import * as fs from 'fs';


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fs.readdir("blogdata", "utf-8", (err, data) => {
    res.status(200).json(data)
  })
}
