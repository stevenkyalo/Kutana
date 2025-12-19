import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private redisClient;
    constructor(usersService: UsersService, redisClient: any);
    private generateOtp;
    sendOtp(phone: string): Promise<{
        success: boolean;
        message: string;
        otp_sent: string | undefined;
    }>;
    verifyOtp(phone: string, otp: string): Promise<{
        success: boolean;
        message: string;
        user?: never;
    } | {
        success: boolean;
        message: string;
        user: import("../users/users.entity").User;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map