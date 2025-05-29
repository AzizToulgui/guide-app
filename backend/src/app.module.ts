import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperienceModule } from './experience/experience.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { Experience } from './experience/experience.entity';
import { AuthModule } from './auth/auth.module';
import {User} from "./user/user.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'experience_db',
    entities: [User, Experience],
    synchronize: true,
  }),ExperienceModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
