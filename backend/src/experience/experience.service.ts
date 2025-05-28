import { Injectable } from '@nestjs/common';
import {CreateExperienceDto} from "./dto/create-experience.dto";
import { v4 as uuid } from 'uuid';
import {InjectRepository} from "@nestjs/typeorm";
import {Experience} from "./experience.entity";
import {Repository} from "typeorm";
import {UpdateExperienceDto} from "./dto/update-experience.dto";

@Injectable()
export class ExperienceService {
    constructor(
        @InjectRepository(Experience)
        private readonly experienceRepo : Repository<Experience>,
    ) {
    }

    create(dto: CreateExperienceDto) {
       const experience = this.experienceRepo.create(dto);
       return this.experienceRepo.save(experience);
    }

    findAll() {
        return this.experienceRepo.find();
    }

    findOne(id: string) {
        return this.experienceRepo.findOneBy({id});
    }

    async update(id: string , dto: UpdateExperienceDto) {
        await this.experienceRepo.update(id, dto);
        return this.findOne(id);
    }

    remove(id: string) {
        return this.experienceRepo.delete(id);
    }
}
