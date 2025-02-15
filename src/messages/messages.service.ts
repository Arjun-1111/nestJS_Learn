import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private readonly mesaagesrepo: MessagesRepository;

  constructor() {
    // this is not a good practice, but for simplicity let's assume it's okay
    // we will use dependency injection later
    // currently service is creating its own dependency
    this.mesaagesrepo = new MessagesRepository();
  }

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
