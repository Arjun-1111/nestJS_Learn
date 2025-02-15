import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  private filePath = 'messages.json';
  private messages: { [id: number]: { id: number; content: string } } = {};

  constructor() {
    this.loadMessages();
  }

  private async loadMessages() {
    try {
      const allMessages = await readFile(this.filePath, 'utf-8');
      this.messages = JSON.parse(allMessages);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  async findOne(id: number) {
    return this.messages[id];
  }

  async findAll() {
    return Object.values(this.messages);
  }

  async create(content: string) {
    const id = Math.floor(Math.random() * 999);
    this.messages[id] = { id, content };
    await this.saveMessages();
  }

  private async saveMessages() {
    await writeFile(this.filePath, JSON.stringify(this.messages));
  }

  async delete(id: number) {
    delete this.messages[id];
    await this.saveMessages();
  }

  async update(id: number, content: string) {
    if (!this.messages[id]) {
      throw new Error(`Message with id ${id} not found`);
    }
    this.messages[id].content = content;
    await this.saveMessages();
  }
}
