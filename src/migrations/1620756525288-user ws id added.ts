import { MigrationInterface, QueryRunner } from 'typeorm';

export class userWsIdAdded1620756525288 implements MigrationInterface {
  name = 'userWsIdAdded1620756525288';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user` ADD `wsID` varchar(50) NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` CHANGE `dateSinc` `dateSinc` timestamp NOT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `sinc_datum` CHANGE `dateSinc` `dateSinc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()',
    );
    await queryRunner.query('ALTER TABLE `user` DROP COLUMN `wsID`');
  }
}
