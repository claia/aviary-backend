import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { BirdModule } from './bird/bird.module';

@Module({
  imports: [
    ConfigModule.forRoot(), //stablish env variables
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    BirdModule
  ],
})
export class AppModule {}
