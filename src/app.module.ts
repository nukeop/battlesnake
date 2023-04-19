import { Module } from '@nestjs/common';
import { SnakeModule } from './snake/snake.module';
import { BrainProvider } from './brain/brain.service';

@Module({
  imports: [SnakeModule],
  controllers: [],
  providers: [BrainProvider],
})
export class AppModule {}
