import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { IsString, MaxLength, IsDateString, IsOptional } from 'class-validator';

@Entity({name: 'vendors'})
export class VendorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'nvarchar', length: 150, nullable: false})
    @IsString()
    @MaxLength(150)
    name: string;

    @Column({type: 'bit', nullable: false, default: 0})
    licActive: boolean;

    @Column({type: 'smalldatetime', nullable: true})
    @IsDateString()
    @IsOptional()
    licFrom: Date | null;

    @Column({type: 'smalldatetime', nullable: true})
    @IsDateString()
    @IsOptional()
    licLastRefresh: Date | null;

    @Column({type: 'bit', nullable: false, default: 0})
    licNoVerified: boolean;

    @Column({type: 'smalldatetime', nullable: true})
    @IsDateString()
    @IsOptional()
    licTo: Date | null;
}
