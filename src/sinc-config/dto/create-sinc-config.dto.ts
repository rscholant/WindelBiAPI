export class CreateSincConfigDto {
  readonly title: string;
  readonly sql: string;
  readonly tables: Array<string>;
}
