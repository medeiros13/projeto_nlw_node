import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
  chat: boolean;
  username: string;
}

/**
 * Nessa pasta services, é onde se colocam as regras de negócio da aplicação.
 * Ou seja, aqui que serão adicionadas validações e verificações.
 */
class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {
    /**
     * Isso seria, em SQL igual a:
     * (MySQL)
     * select * from settings where username = "username" limit 1;
     * (SQL Server)
     * select top 1 * from settings where username = "username";
     */
    const userAlreadyExists = await this.settingsRepository.findOne({
      username
    });

    /**
     * Se o usuário já existir, lança uma exceção pro controller
     */
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = this.settingsRepository.create({
      chat,
      username
    });

    await this.settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };