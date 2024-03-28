import { CreateModelInput } from './create-model.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateModelInput extends PartialType(CreateModelInput) {
  id: number;
}
