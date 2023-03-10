import express  from "express";
import cors from "cors";
import diagnose from "./routers/diagnose";
const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.use(express.json());

app.get('/api/ping', (_req,res)=>{
res.send("pong");
});

app.use("/api", diagnose);
app.listen(3001, ()=>{
    console.log("listening!!!");
});
