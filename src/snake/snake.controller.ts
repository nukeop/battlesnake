import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import {
  BattleSnakeMeta,
  EndRequest,
  MoveRequest,
  StartRequest,
} from './snake.model';
import { SnakeService } from './snake.service';

@Controller('')
export class SnakeController {
  constructor(private readonly snakeService: SnakeService) {}

  @Get()
  getHello(): BattleSnakeMeta {
    return this.snakeService.getMetadata();
  }

  @HttpCode(200)
  @Post('start')
  start(@Body() startRequest: StartRequest) {}

  @HttpCode(200)
  @Post('move')
  move(@Body() moveRequest: MoveRequest) {
    return this.snakeService.getMove(moveRequest);
  }

  @HttpCode(200)
  @Post('end')
  end(@Body() endRequest: EndRequest) {}
}
