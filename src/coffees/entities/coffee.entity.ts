import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavors.entity';
@Entity() //sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column({ default: 0 })
  recommendation: number;
  @JoinTable()
  @ManyToMany((_type) => Flavor, (flavor) => flavor.coffee, { cascade: true })
  flavors: Flavor[];
  recommendations: any;
}
