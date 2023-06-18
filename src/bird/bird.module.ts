import { Module } from '@nestjs/common';
import { BirdService } from './bird.service';
import { BirdController } from './bird.controller';

@Module({
  controllers: [BirdController],
  providers: [BirdService]
})
export class BirdModule {}
