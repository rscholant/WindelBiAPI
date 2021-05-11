export class UserDto {
  readonly id: string;
  readonly name: string;
  readonly cnpj: string;
  readonly status: number;
  readonly wsId?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
