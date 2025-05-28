import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from './experience.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', // Ensure this folder exists
        filename: (req, file, cb) => {
          const ext = path.extname(file.originalname);
          const filename = `${uuidv4()}${ext}`;
          cb(null, filename);
        },
      }),
    }),
    TypeOrmModule.forFeature([Experience]),
  ],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}
