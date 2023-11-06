import { Module } from '@nestjs/common'
import { UserModule } from './adapter/controller/user.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvConfigModule } from './util/env-config/env-config.module'

@Module({
  imports: [EnvConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
