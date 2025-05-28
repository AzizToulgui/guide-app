import {Body, Controller, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { extname } from 'path';
import { diskStorage } from 'multer';

import {ExperienceService} from "./experience.service";
import {CreateExperienceDto} from "./dto/create-experience.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {UpdateExperienceDto} from "./dto/update-experience.dto";

@Controller('experience')
export class ExperienceController {
    constructor(private readonly experienceService: ExperienceService) {}

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor([{name : 'images', maxCount : 5}],{
            storage : diskStorage({
                destination : './uploads',
                filename: (req, file, cb) =>{
                    const uniqueName= `${uuid()} ${extname(file.originalname)}`;
                    cb(null, uniqueName)
                }
            })
        })
    )
    async create(
        @Body() body: CreateExperienceDto,
        @UploadedFiles() files : {images?: Express.Multer.File[]},
    ){
        const imageFilenames = files?.images?.map(file =>`/uploads/${file.filename}`)|| [];
        return this.experienceService.create({
            ...body,
            images : imageFilenames,
        })
    }

    @Get()
    findAll(){
        return this.experienceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.experienceService.findOne(id);
    }

    @Put(':id')
    update(@Param('id')id : string, @Body() dto: UpdateExperienceDto){
        return this.experienceService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.experienceService.remove(id)
    }
}
