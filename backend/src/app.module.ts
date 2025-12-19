import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USER || 'kutana_app',
      password: process.env.DATABASE_PASSWORD || 'mwangangi',
      database: process.env.DATABASE_NAME || 'kutana_db',
      entities: [User],
      synchronize: true, // DEV only; disable in production and use migrations
    }),
    TypeOrmModule.forFeature([User]),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
