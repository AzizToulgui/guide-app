import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() body: { username: string; email: string; password: string }) {
        return this.authService.signup(body.username, body.email, body.password);
    }

    @Post('login')
    login(@Body() body:{identifier: string, password: string}) {
        return this.authService.login(body.identifier , body.password);
    }

    @Post('logout')
    logout() {
        return this.authService.logout();
    }
}
