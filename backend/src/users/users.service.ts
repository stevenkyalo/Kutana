import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async findByPhone(phone: string) {
    return this.usersRepo.findOne({ where: { phone } });
  }

  async createIfNotExists(phone: string) {
    let user = await this.findByPhone(phone);
    if (!user) {
      user = this.usersRepo.create({ phone });
      await this.usersRepo.save(user);
    }
    return user;
  }

  async updateProfile(userId: string, patch: Partial<User>) {
    await this.usersRepo.update({ id: userId }, patch);
    return this.usersRepo.findOne({ where: { id: userId } });
  }
}
