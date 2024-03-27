import { CreateMakeInput } from './create-make.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMakeInput extends PartialType(CreateMakeInput) {
  id: number;
}
