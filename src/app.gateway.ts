import {
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { UsersService } from './users/users.service';
import { User } from './users/entities/user.entity';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private readonly usersService: UsersService) {}
  private logger: Logger = new Logger('WebSocket');

  handleConnection(client: Socket): any {
    this.logger.log('New client detected: ' + client.id);
    client.emit('events', { message: 'Connected', id: client.id });
    this.usersService.updateWSId(client.handshake.query.auth, client.id);
    this.server.sockets.sockets[client.id].emit('events', 'teste');
  }
  handleDisconnect(client: Socket): any {
    this.usersService.updateWSId(client.handshake.query.auth, '');
    this.logger.log('Disconnection detected: ' + client.id);
  }
  async sendSincConfig({ wsID }: User, changes: any) {
    if (wsID && this.server.sockets.sockets[wsID]) {
      this.server.sockets.sockets[wsID].emit('sinc-config', changes);
    }
  }
  afterInit(): any {
    this.logger.log('Gateway successfully initiated');
  }
}
