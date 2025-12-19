"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
@(0, common_1.Injectable)()
class AuthService {
    usersService;
    redisClient;
    constructor(usersService, 
    @(0, common_1.Inject)('REDIS')
    redisClient) {
        this.usersService = usersService;
        this.redisClient = redisClient;
    }
    generateOtp() {
        return String((0, crypto_1.randomInt)(100000, 999999));
    }
    async sendOtp(phone) {
        const otp = this.generateOtp();
        const key = `otp:${phone}`;
        // Store otp in Redis with TTL (5 minutes)
        await this.redisClient.set(key, otp, 'EX', 300);
        // Stubbed: send SMS via Africa's Talking
        // To integrate, set AT_USERNAME & AT_API_KEY in env and uncomment request
        // Example using fetch:
        /*
        const AT_USERNAME = process.env.AT_USERNAME;
        const AT_API_KEY = process.env.AT_API_KEY;
        const smsBody = {
          username: AT_USERNAME,
          to: phone,
          message: `Your Kutana OTP is ${otp}`
        };
        // call Africa's Talking REST API or SDK here
        */
        console.log(`OTP for ${phone}: ${otp} (stored in Redis).`);
        // In sandbox/dev, return success but do not expose otp in production.
        return { success: true, message: 'OTP sent (dev)', otp_sent: process.env.NODE_ENV === 'development' ? otp : undefined };
    }
    async verifyOtp(phone, otp) {
        const key = `otp:${phone}`;
        const stored = await this.redisClient.get(key);
        if (!stored) {
            return { success: false, message: 'OTP expired or not sent' };
        }
        if (stored !== otp) {
            return { success: false, message: 'Invalid OTP' };
        }
        // OTP valid — create or fetch user
        const user = await this.usersService.createIfNotExists(phone);
        // Option: generate JWT (not implemented yet)
        // Delete OTP
        await this.redisClient.del(key);
        return { success: true, message: 'Verified', user };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map