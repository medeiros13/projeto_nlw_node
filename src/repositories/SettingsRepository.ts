import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";

/**
 * O extends significa que a classe SettingsRepository está pegando todos os métodos da classe Repository para ela
*/
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> { }


export { SettingsRepository };