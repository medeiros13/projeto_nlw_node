import { Router } from "express";
import { SettingsController } from "./controllers/settingsController";

const routes = Router();
const settingsController = new SettingsController();
/**
 * Tipos de parâmetros:
 *  Routes Params => Parâmetros de rotas;
 *    http://localhost:3333/settings/1
 *  Query Params => Filtros e buscas;
 *    http://localhost:3333/settings/1?search=algumacoisa
 *  Body Params => Inserções e Alterações, serve para passar objetos dentro das nossas requisições;
 *    {      
 *    }
*/
routes.post("/Settings", settingsController.create);

export { routes };