import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ItemType extends BaseEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;
  @Column()
  name: string;
  @Column({ type: 'float', nullable: true })
  price: number;
  @Column({ type: 'float', nullable: true })
  pricePerKg: number;
}
