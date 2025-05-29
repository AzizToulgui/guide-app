import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../user/user.entity";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepo : Repository<User>,
        private jwtService: JwtService,
    ) {}

    async signup( username : string, email: string , password: string){
        const hashed = await bcrypt.hash(password, 10);
        const user = this.userRepo.create({username,email, password: hashed});
        return this.userRepo.save(user);
    }

    async login(identifier: string, password: string){
        const user = await this.userRepo.findOne({ where : [
                {email: identifier},
                {username: identifier},
            ]});

        if(!user || !(await bcrypt.compare(password, user.password))){
            throw new UnauthorizedException("Invalid Credentials");
        }
        const token = this.jwtService.sign({sub: user.id});
        return {access_token: token};
    }

    async logout(){
        return {message: "Logged out"};
    }
}
