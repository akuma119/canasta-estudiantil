const express = require("express")
const path = require("path")
const pug = require("pug")
const bodyParser = require("body-parser")
const readXlsx = require('read-excel-file/node');

const app = express()

let struc 


app.set("view engine", "pug")
app.set("views", "views")


const dataRoute = require("./routes/data")

app.use("/asd", (req,res)=> {
  res.send(struc)
})

app.get("/", (req,res)=> {
  res.render("index")
})

app.use((req,res,next)=> {
  readXlsx("relev.xlsx").then((rows) => {
    console.log(rows)
    struc = rows
    res.send("tu vieja, no anda, F")
  })
})


app.listen(3000, () => {
  console.log('app listening at http://localhost:3000')
})