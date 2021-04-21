import express, { request } from "express";
import "./database"; //TypeScript reconhece automaticamente que ele precisa buscar um arquivo index.ts (sempre utilizar o nome "index")
import { routes } from "./routes";
const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));