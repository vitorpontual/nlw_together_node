import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624482781400 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'compliemnts',
                columns: {};
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
