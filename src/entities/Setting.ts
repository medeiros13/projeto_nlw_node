/* Iremos criar um arquivo .ts para cada tabela criada no banco de dados,
  Para a classe, devemos utilizar o @Entity, passando como parâmetro o nome da tabela no banco de dados
  para a coluna PK, utilizamos o @PrimaryColumn,
  para as colunas normais, utilizamos o @Column,
  para as colunas que devem se atualizar assim que uma alteração for feita, utilizamos o UpdateDateColumn;
  para as colunas que devem ser preenchidas ao criar o registro, utilizamos o CreateDateColumn;
*/
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {
  @PrimaryColumn()
  id: string;
  @Column()
  username: string;
  @Column()
  chat: boolean;
  @UpdateDateColumn()
  updated_at: Date;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    /**
     * Se o ID não estiver preenchido, cria um novo UUID;
    */
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Setting }