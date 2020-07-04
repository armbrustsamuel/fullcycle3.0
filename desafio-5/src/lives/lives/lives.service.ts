import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Live } from '../live.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class LivesService {
    constructor(
        @InjectRepository(Live)
        private contactRepository: Repository<Live>,
    ) { }

    async  findAll(): Promise<Live[]> {
        return await this.contactRepository.find();
    }

    async  create(contact: Live): Promise<Live> {
        return await this.contactRepository.save(contact);
    }

    async update(contact: Live): Promise<UpdateResult> {
        return await this.contactRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }
}