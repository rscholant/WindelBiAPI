import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { UsersService } from '../users/users.service';
import { LoginStatus } from './interfaces/login-status.interface';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { add } from 'date-fns';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered 🥰',
    };

    try {
      await this.usersService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);
    return {
      cnpj: user.cnpj,
      ...token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<CreateUserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ cnpj }: CreateUserDto): any {
    const expiresIn = process.env.EXPIRES_IN;
    const expiresAt = add(new Date(), {
      days: expiresIn.includes('d')
        ? parseInt(expiresIn.replace(/\D/g, ''), 10)
        : 0,
      hours: expiresIn.includes('h')
        ? parseInt(expiresIn.replace(/\D/g, ''), 10)
        : 0,
    }).getTime();
    const user: JwtPayload = { cnpj };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      expiresAt,
      accessToken,
    };
  }
}
