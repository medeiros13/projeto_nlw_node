import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1618969510019 implements MigrationInterface {

    //Aqui na função UP, adicionamos todas as mudanças que devem ser feitas no nosso BD
    public async up(queryRunner: QueryRunner): Promise<void> {

        /*
        Para rodarmos um CreateTable, utilizamos esse método abaixo
        onde se utiliza a classe Table, composta por:
        - name = nome da tabela no banco de dados;
        - columns = array contendo todas as colunas do nosso banco de dados;
            - cada coluna é composta por:
                - name = nome da coluna;
                - type = tipo da coluna;
                - demais atributos opcionais, como isPrimary que define se é PrimaryKey
        */
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        );
    }

    /*
    Aqui é onde todo o processo de alterações feito no UP, é desfeito,
    então por exemplo: Se no UP você criou uma tabela, aqui você dropa ela.
    */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
