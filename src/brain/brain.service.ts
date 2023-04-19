import { Injectable } from '@nestjs/common';
import { Dann } from 'dannjs';
import { BattleSnakeBoard, Snake } from 'src/snake/snake.model';

const MAX_BOARD_SIZE = 19;
// Empty, food, hazard, snake body, snake head, own snake body, own snake head
const ENTITY_TYPES = 6;

@Injectable()
export class BrainProvider {
  getRandomBrain() {
    const net = new Dann(MAX_BOARD_SIZE * MAX_BOARD_SIZE, 4);
    net.addHiddenLayer(32, 'sigmoid');
    net.outputActivation('Sigmoid');
    net.makeWeights();
    return net;
  }

  gameToInput(board: BattleSnakeBoard, you: Snake) {
    const input = [];
    for (let y = 0; y < MAX_BOARD_SIZE; y++) {
      for (let x = 0; x < MAX_BOARD_SIZE; x++) {
        if (board.food?.some((food) => food.x === x && food.y === y)) {
          input.push(1);
          continue;
        } else if (
          board.hazards?.some((hazard) => hazard.x === x && hazard.y === y) ||
          y >= board.height ||
          x >= board.width
        ) {
          input.push(2);
          continue;
        } else if (
          board.snakes?.some((snake) =>
            snake.body.some((body) => body.x === x && body.y === y),
          )
        ) {
          input.push(3);
          continue;
        } else if (
          board.snakes?.some(
            (snake) => snake.head.x === x && snake.head.y === y,
          )
        ) {
          input.push(4);
          continue;
        } else if (you.body.some((body) => body.x === x && body.y === y)) {
          input.push(5);
          continue;
        } else if (you.head.x === x && you.head.y === y) {
          input.push(6);
          continue;
        } else {
          input.push(0);
          continue;
        }
      }
    }
    return input;
  }
}
