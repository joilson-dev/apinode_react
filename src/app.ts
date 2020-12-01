import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index";

const app = express();
const server = new http.Server(app);

app.use(cors());

app.use(bodyParser.json({limit:"50mb"}));

app.use(bodyParser.urlencoded({limit:"50mb", extended:true, parameterLimit:50000}));
app.use(routes);

export default app;