import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSincConfig1619806427690 implements MigrationInterface {
  name = 'CreateSincConfig1619806427690';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ' CREATE TABLE `sinc_config` (`id` int NOT NULL AUTO_INCREMENT, `sql` varchar(2000) NOT NULL, `tables` varchar(2000) NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `sinc_config`');
  }
}
