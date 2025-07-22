import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Todo } from "generated/prisma";

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.todo.findMany({
      orderBy: { id: 'asc' }
    })
  };
  
  async add(title: Todo['title']) {
    const newTodo = await this.prisma.todo.create({
      data: {
        title, 
        date: new Date(),
      }
    })
    return newTodo;
  }

  async delete(id: Todo['id']) {
    await this.prisma.todo.delete({
      where: { id },
    });
    return { message: "Deleted" };
  }
}