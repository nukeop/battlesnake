import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { SnakeModule } from './snake/snake.module';
import { TestFixture } from './test/test-fixture';

describe('Snake - E2e tests', () => {
  let app: INestApplication;

  beforeAll(() => {
    TestFixture.beforeAll();
  });

  beforeEach(async () => {
    app = await createApp();
  });

  it('should return "Hello World!"', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect({
      apiversion: '1',
      author: 'nukeop',
      color: '#fc83d3',
      head: 'sand-worm',
      tail: 'default',
      version: '1.0.0',
    });
  });
});

export const createApp = async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [SnakeModule],
    controllers: [],
    providers: [],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();
  return app;
};
