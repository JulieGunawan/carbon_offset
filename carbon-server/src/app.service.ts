import { Injectable } from '@nestjs/common';

//service uses injectable to inject it to the controller
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
