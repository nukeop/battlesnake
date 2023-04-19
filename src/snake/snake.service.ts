import { Inject, Injectable, Logger } from '@nestjs/common';
import { BrainProvider } from 'src/brain/brain.service';
import { BattleSnakeMeta, MoveRequest } from './snake.model';

@Injectable()
export class SnakeService {
  constructor(
    @Inject(BrainProvider) private readonly brainProvider: BrainProvider,
  ) {}
  getMetadata(): BattleSnakeMeta {
    return {
      apiversion: '1',
      author: 'nukeop',
      color: '#fc83d3',
      head: 'sand-worm',
      tail: 'default',
      version: '1.0.0',
    };
  }

  getMove(moveRequest: MoveRequest) {
    const brain = this.brainProvider.getRandomBrain();
    const input = this.brainProvider.gameToInput(
      moveRequest.board,
      moveRequest.you,
    );
    const move = brain.feedForward(input);

    return {
      move: ['up', 'down', 'left', 'right'][move.indexOf(Math.max(...move))],
      shout: 'LOL!',
    };
  }
}
