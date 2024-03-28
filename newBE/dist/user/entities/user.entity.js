"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = exports.UserProvider = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const graphql_1 = require("@nestjs/graphql");
const inventory_entity_1 = require("../../inventory/entities/inventory.entity");
const invoice_entity_1 = require("../../invoice/entities/invoice.entity");
exports.UserProvider = "USER_PROVIDER";
let UserEntity = class UserEntity extends sequelize_typescript_1.Model {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    }),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], UserEntity.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: "name"
    }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        validate: { isEmail: true, isLowercase: true },
        field: "email",
        allowNull: false
    }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: "password",
        allowNull: false
    }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, field: "role", allowNull: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, field: "avatar", allowNull: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, field: "created_at" }),
    __metadata("design:type", Date)
], UserEntity.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, field: "updated_at" }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, field: "deleted_at", allowNull: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UserEntity.prototype, "deleted_at", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => inventory_entity_1.InventoryEntity),
    __metadata("design:type", Array)
], UserEntity.prototype, "inventory", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => invoice_entity_1.InvoiceEntity),
    __metadata("design:type", Array)
], UserEntity.prototype, "order", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Users',
        paranoid: true,
        timestamps: true,
    })
], UserEntity);
//# sourceMappingURL=user.entity.js.map