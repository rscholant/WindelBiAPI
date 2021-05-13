import { MigrationInterface, QueryRunner } from 'typeorm';

export class sincConfigTitle1620821177181 implements MigrationInterface {
  name = 'sincConfigTitle1620821177181';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `sinc_config` ADD `title` varchar(200) NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` CHANGE `dateSinc` `dateSinc` timestamp NOT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` CHANGE `dateSinc` `dateSinc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()',
    );
    await queryRunner.query('ALTER TABLE `sinc_config` DROP COLUMN `title`');
  }
}
