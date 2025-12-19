import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: Repository<User>);
    findByPhone(phone: string): Promise<User | null>;
    createIfNotExists(phone: string): Promise<User>;
    updateProfile(userId: string, patch: Partial<User>): Promise<User | null>;
}
//# sourceMappingURL=users.service.d.ts.map