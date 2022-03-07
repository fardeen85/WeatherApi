const express = require('express')
const app = express()
const request = require('requests');

const port = process.env.PORT || 36018

app.get("/",(req,res)=>{

   
    request('http://api.openweathermap.org/data/2.5/weather?lat=24.8546842&lon=67.0207055&appid=3e8beb159f8f74a35987a04133a2e986')

    .on("data", (chunk)=>{

        const json = JSON.parse(chunk)
        res.send(json)

    })

    .on("error",(err)=>{

        if(err) return console.log(err)

    })

    .on("end",(err)=>{

        if(err) return console.log("Connection closed due to"+err)
        res.end()

    })
})

app.listen(port,()=>{

    console.log("Server running at port 8000")
})