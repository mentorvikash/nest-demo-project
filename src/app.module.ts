import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { AlbumsController } from './ablum.controlles';

@Module({
  controllers: [UserController, AlbumsController],
})
export class AppModule {}
