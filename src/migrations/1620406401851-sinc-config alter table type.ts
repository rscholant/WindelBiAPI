import { MigrationInterface, QueryRunner } from 'typeorm';

export class sincConfigAlterTableType1620406401851
  implements MigrationInterface {
  name = 'sincConfigAlterTableType1620406401851';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` CHANGE `dateSinc` `dateSinc` timestamp NOT NULL',
    );
    await queryRunner.query('ALTER TABLE `sinc_config` DROP COLUMN `tables`');
    await queryRunner.query(
      'ALTER TABLE `sinc_config` ADD `tables` longtext NOT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `sinc_config` DROP COLUMN `tables`');
    await queryRunner.query(
      'ALTER TABLE `sinc_config` ADD `tables` varchar(2000) NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` CHANGE `dateSinc` `dateSinc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()',
    );
  }
}
