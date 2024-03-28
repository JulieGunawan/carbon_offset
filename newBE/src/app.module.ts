import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserEntity } from './user/entities/user.entity';
import { InventoryModule } from './inventory/inventory.module';
import { InventoryEntity } from './inventory/entities/inventory.entity';
import { MakeModule } from './make/make.module';
import { MakeEntity } from './make/entities/make.entity';
import { ModelModule } from './model/model.module';
import { InvoiceEntity } from './invoice/entities/invoice.entity';
import { InvoiceModule } from './invoice/invoice.module';
import { ModelEntity } from './model/entities/model.entity';

@Module({
  imports: [ 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths:['./**/*.graphql'],
    }), 

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '142536',
      database: 'mydb',
      models: [UserEntity, InventoryEntity, MakeEntity, InvoiceEntity, ModelEntity],

    }),
    UserModule,
    InventoryModule,
    MakeModule,
    ModelModule,
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
