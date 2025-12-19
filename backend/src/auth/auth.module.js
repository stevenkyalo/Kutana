"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const users_module_1 = require("../users/users.module");
const ioredis_1 = require("ioredis");
const redisClient = new ioredis_1.default({
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
});
@(0, common_1.Module)({
    imports: [users_module_1.UsersModule],
    controllers: [auth_controller_1.AuthController],
    providers: [
        auth_service_1.AuthService,
        {
            provide: 'REDIS',
            useValue: redisClient,
        },
    ],
    exports: ['REDIS'],
})
class AuthModule {
}
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map