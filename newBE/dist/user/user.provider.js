"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = void 0;
const user_entity_1 = require("./entities/user.entity");
exports.userProvider = [
    {
        provide: user_entity_1.UserProvider,
        useValue: user_entity_1.UserEntity
    }
];
//# sourceMappingURL=user.provider.js.map