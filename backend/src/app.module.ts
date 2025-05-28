import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperienceModule } from './experience/experience.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { Experience } from './experience/experience.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'experience_db',
    entities: [Experience],
    synchronize: true,
  }),ExperienceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
