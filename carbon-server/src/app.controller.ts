import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getCat(): any {
    // return this.appService.getHello();
    const cat = new Cat("kitty", 8);
    return cat;
  }

  @Post('')
  createCat(@Body() body): any {
    const cat = new Cat(body.name, body.age);
    cats.push(cat);
    return cat;
  }
}

let cats = [];

class Cat {
  constructor(private name: string, private age: number) {}
}
