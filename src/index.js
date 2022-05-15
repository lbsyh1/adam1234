import express from "express";
import router1 from '../router/router1';
import router2 from '../router/router2';
import router3 from '../router/router3';


const app = express();

const PORT =4000;










const handle3=(req,res)=>{
    console.log("login");
}

app.use("/",router1);
app.use("/user",router2);
app.use("/client",router3);
asdasdasdasd
app.listen(PORT,handle3);