"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
@(0, typeorm_1.Entity)('users')
class User {
    @(0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    id;
    @(0, typeorm_1.Column)({ unique: true })
    phone;
    @(0, typeorm_1.Column)({ nullable: true })
    name;
    @(0, typeorm_1.Column)({ nullable: true })
    date_of_birth;
    @(0, typeorm_1.Column)({ nullable: true })
    gender;
    @(0, typeorm_1.Column)({ type: 'json', nullable: true })
    photos;
    @(0, typeorm_1.Column)({ type: 'text', nullable: true })
    bio;
    @(0, typeorm_1.Column)({ nullable: true })
    last_active;
    @(0, typeorm_1.CreateDateColumn)()
    created_at;
    @(0, typeorm_1.UpdateDateColumn)()
    updated_at;
}
exports.User = User;
//# sourceMappingURL=users.entity.js.map