import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController{
  constructor(private todosService : TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.findAll();
  }
  
  @Post()
  addTodos(@Body('title') title: string){
    return this.todosService.add(title);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number){
    this.todosService.delete(+id);
    return { message: "Deleted" }
  }
}
