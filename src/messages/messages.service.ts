import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly mesaagesrepo: MessagesRepository) {}

  async findAll() {
    return this.mesaagesrepo.findAll();
  }

  async findOne(id: number) {
    return this.mesaagesrepo.findOne(id);
  }

  async create(content: string) {
    return this.mesaagesrepo.create(content);
  }
}
