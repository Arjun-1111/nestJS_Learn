import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: number) {
    const allmessages = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(allmessages);
    return messages[id];
  }
  async findAll() {
    const allmessages = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(allmessages);
    return messages;
  }
  async create(content: string) {
    const allmessages = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(allmessages);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content: content };
    await writeFile('messages.json', JSON.stringify(messages));
    return messages;
  }
}
