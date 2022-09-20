import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth') // path which will be applied 

export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup() : string {
        return "I am Signup"
    }

    @Post('signin')
    signin() : string {
        return "I am Signin"
    }
}