import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { csvMapper } from './utils/mapper';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, csvMapper],
})
export class AppModule {}
