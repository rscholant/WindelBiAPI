import { MigrationInterface, QueryRunner } from 'typeorm';

export class sincConfigUser1620149856860 implements MigrationInterface {
  name = 'sincConfigUser1620149856860';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `sinc_config` ADD `userId` int NULL');
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` CHANGE `dateSinc` `dateSinc` timestamp NOT NULL',
    );
    await queryRunner.query('ALTER TABLE `sinc_datum` DROP COLUMN `data`');
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` ADD `data` longtext NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `sinc_config` ADD CONSTRAINT `FK_e556c2f13b4b8f7a3a0c0c1ac0f` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `sinc_config` DROP FOREIGN KEY `FK_e556c2f13b4b8f7a3a0c0c1ac0f`',
    );
    await queryRunner.query('ALTER TABLE `sinc_datum` DROP COLUMN `data`');
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` ADD `data` text NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` CHANGE `dateSinc` `dateSinc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()',
    );
    await queryRunner.query('ALTER TABLE `sinc_config` DROP COLUMN `userId`');
  }
}
