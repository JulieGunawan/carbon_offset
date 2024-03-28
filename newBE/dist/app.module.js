"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const sequelize_1 = require("@nestjs/sequelize");
const user_entity_1 = require("./user/entities/user.entity");
const inventory_module_1 = require("./inventory/inventory.module");
const inventory_entity_1 = require("./inventory/entities/inventory.entity");
const make_module_1 = require("./make/make.module");
const make_entity_1 = require("./make/entities/make.entity");
const model_module_1 = require("./model/model.module");
const invoice_entity_1 = require("./invoice/entities/invoice.entity");
const invoice_module_1 = require("./invoice/invoice.module");
const model_entity_1 = require("./model/entities/model.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: true,
                typePaths: ['./**/*.graphql'],
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'admin',
                password: '142536',
                database: 'mydb',
                models: [user_entity_1.UserEntity, inventory_entity_1.InventoryEntity, make_entity_1.MakeEntity, invoice_entity_1.InvoiceEntity, model_entity_1.ModelEntity],
            }),
            user_module_1.UserModule,
            inventory_module_1.InventoryModule,
            make_module_1.MakeModule,
            model_module_1.ModelModule,
            invoice_module_1.InvoiceModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map