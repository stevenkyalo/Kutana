"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("./users.service");
const users_entity_1 = require("./users.entity");
@(0, common_1.Module)({
    imports: [typeorm_1.TypeOrmModule.forFeature([users_entity_1.User])],
    providers: [users_service_1.UsersService],
    exports: [users_service_1.UsersService],
})
class UsersModule {
}
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map