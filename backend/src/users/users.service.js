"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Injectable)()
class UsersService {
    usersRepo;
    constructor(
    @(0, typeorm_1.InjectRepository)(users_entity_1.User)
    usersRepo) {
        this.usersRepo = usersRepo;
    }
    async findByPhone(phone) {
        return this.usersRepo.findOne({ where: { phone } });
    }
    async createIfNotExists(phone) {
        let user = await this.findByPhone(phone);
        if (!user) {
            user = this.usersRepo.create({ phone });
            await this.usersRepo.save(user);
        }
        return user;
    }
    async updateProfile(userId, patch) {
        await this.usersRepo.update({ id: userId }, patch);
        return this.usersRepo.findOne({ where: { id: userId } });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map