import { Module } from '@nestjs/common';
import { SnakeService } from './snake.service';
import { SnakeController } from './snake.controller';
import { BrainModule } from 'src/brain/brain.module';

@Module({
  imports: [BrainModule],
  controllers: [SnakeController],
  providers: [SnakeService],
})
export class SnakeModule {}
