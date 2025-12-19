import { AuthService } from './auth.service';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    sendOtp(body: {
        phone: string;
    }): Promise<{
        success: boolean;
        message: string;
        otp_sent: string | undefined;
    }>;
    verifyOtp(body: {
        phone: string;
        otp: string;
    }): Promise<{
        success: boolean;
        message: string;
        user?: never;
    } | {
        success: boolean;
        message: string;
        user: import("../users/users.entity").User;
    }>;
}
//# sourceMappingURL=auth.controller.d.ts.map