import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateCoffeeDto {
  @ApiProperty({ description: 'Enter name of coffee' })
  @IsString()
  readonly name: string;
  @ApiProperty({ description: 'Enter name of coffee' })
  @IsString()
  readonly brand: string;
  @ApiProperty({ description: 'Enter name of coffee' })
  @IsString({ each: true })
  readonly flavors: string[];
}
