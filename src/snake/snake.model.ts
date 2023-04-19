export type BattleSnakeMeta = {
  apiversion: string;
  author: string;
  color: string;
  head: 'default' | 'sand-worm';
  tail: 'default' | 'sharp';
  version: string;
};

export type BattleSnakePosition = {
  x: number;
  y: number;
};

export type Snake = {
  id: string;
  name: string;
  health: number;
  body: BattleSnakePosition[];
  latency: string;
  head: BattleSnakePosition;
  length: number;
  shout: string;
  squad: string;
  customizations: {
    color: string;
    head: string;
    tail: string;
  };
};

export type BattleSnakeGame = {
  id: string;
  ruleset: {
    name: string;
    version: string;
  };
  map: string;
  timeout: number;
  source: 'tournament' | 'league' | 'arena' | 'challenge' | 'custom';
};

export type BattleSnakeBoard = {
  height: number;
  width: number;
  food: BattleSnakePosition[];
  hazards: BattleSnakePosition[];
  snakes: Snake[];
};

export type StartRequest = {};

export type MoveRequest = {
  game: BattleSnakeGame;
  turn: number;
  board: BattleSnakeBoard;
  you: Snake;
};

export type EndRequest = {};
