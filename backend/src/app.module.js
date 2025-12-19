"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const users_entity_1 = require("./users/users.entity");
@(0, common_1.Module)({
    imports: [
        typeorm_1.TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST || 'localhost',
            port: parseInt(process.env.DATABASE_PORT || '5432'),
            username: process.env.DATABASE_USER || 'kutana',
            password: process.env.DATABASE_PASSWORD || 'kutana_pass',
            database: process.env.DATABASE_NAME || 'kutana_dev',
            entities: [users_entity_1.User],
            synchronize: true, // DEV only; disable in production and use migrations
        }),
        typeorm_1.TypeOrmModule.forFeature([users_entity_1.User]),
        auth_module_1.AuthModule,
        users_module_1.UsersModule,
    ],
})
class AppModule {
}
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map