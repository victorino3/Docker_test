const express= require("express");
const app = express();

app.get("/",(req,res)=>{
        res.send("Express running")

})
var stock = ["SP500","VNGUARD","META"]
app.get("/stock-market",(req,res)=>{
        res.send({stock})
})
app.get("/test",(req,res)=>{
        res.send("Use mocha to test Victorino Gomes")
})
app.listen(3000, console.log("running in 3000"))
