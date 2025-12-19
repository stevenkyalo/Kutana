"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Controller)('auth')
class AuthController {
    auth;
    constructor(auth) {
        this.auth = auth;
    }
    @(0, common_1.Post)('send-otp')
    async sendOtp(
    @(0, common_1.Body)()
    body) {
        const { phone } = body;
        return this.auth.sendOtp(phone);
    }
    @(0, common_1.Post)('verify-otp')
    async verifyOtp(
    @(0, common_1.Body)()
    body) {
        const { phone, otp } = body;
        return this.auth.verifyOtp(phone, otp);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map