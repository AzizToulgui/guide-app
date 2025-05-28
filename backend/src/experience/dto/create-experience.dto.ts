import {IsArray, IsOptional, IsString, IsNumber, IsInt, Min, Max} from 'class-validator';

export class CreateExperienceDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    location: string;

    @IsArray()
    @IsOptional()
    images?: string[];

    @IsArray()
    @IsOptional()
    tags?: string[];

    @IsNumber()
    price: number;

    @IsOptional()
    @IsString()
    duration?: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(5)
    review?: number;

    @IsOptional()
    @IsArray()
    targetedGroups?: string[];
}
