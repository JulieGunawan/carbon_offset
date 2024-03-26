import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './configs.ts';
import { validateConfig } from './config-validation';
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [...configurations],
            isGlobal: true,
            validate: validateConfig, // config validator
    })],
  })
export class ConfigModules {}
