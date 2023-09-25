import { Module } from '@nestjs/common';

import { DatabaseModule } from './infra/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
