import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BirdService } from './bird.service';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Controller('bird')
export class BirdController {
  constructor(private readonly birdService: BirdService) {}

  @Post()
  create(@Body() createBirdDto: CreateBirdDto) {
    return this.birdService.create(createBirdDto);
  }

  @Get()
  findAll() {
    return this.birdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.birdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBirdDto: UpdateBirdDto) {
    return this.birdService.update(+id, updateBirdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.birdService.remove(+id);
  }
}
