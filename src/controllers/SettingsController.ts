import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {

  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (error) {
      /**
       * Aqui no catch conseguimos tratar todas as exceções lançadas.
       * Quando a exceção é um erro de regra de negócio, como no nosso exemplo que diz que não é possível inserir um usuário com o mesmo nome, então, o statusCode de retorno que o servidor deve retornar por padrão é o 400.
       * Quando a exceção for um erro de servidor (por exemplo: o servidor está sobrecarregado), então o statusCode de retorno por padrão é o 500.
       */
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export { SettingsController };