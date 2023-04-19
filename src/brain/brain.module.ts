import { Module } from '@nestjs/common';
import { BrainProvider } from './brain.service';

@Module({
  providers: [BrainProvider],
  exports: [BrainProvider],
})
export class BrainModule {}
