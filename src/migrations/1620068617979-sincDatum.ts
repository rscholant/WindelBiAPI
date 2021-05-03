import { MigrationInterface, QueryRunner } from 'typeorm';

export class sincDatum1620068617979 implements MigrationInterface {
  name = 'sincDatum1620068617979';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ' CREATE TABLE `sinc_datum` (`id` int NOT NULL AUTO_INCREMENT, `dateSinc` timestamp NOT NULL, `data` text NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `userId` int NULL, `sincConfigId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` ADD CONSTRAINT `FK_754a63f1165e3a61db8867d6f3e` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` ADD CONSTRAINT `FK_de672dcb5c5e77572421e731275` FOREIGN KEY (`sincConfigId`) REFERENCES `sinc_config`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` DROP FOREIGN KEY `FK_de672dcb5c5e77572421e731275`',
    );
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` DROP FOREIGN KEY `FK_754a63f1165e3a61db8867d6f3e`',
    );
    await queryRunner.query('DROP TABLE `sinc_datum`');
  }
}
