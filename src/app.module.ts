import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './main/user.module'
import { EnvConfigModule } from './util/env-config/env-config.module'

@Module({
  imports: [EnvConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
