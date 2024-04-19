import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Config extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  hqId: string | null;

  @Column({ nullable: true })
  customerCareLine: string | null;

  @Column({ type: 'float' })
  vat: number;

  @Column({ type: 'float' })
  insuranceFactor: number;

  @Column({ type: 'float' })
  ecommerceFactor: number;

  @Column({ type: 'float' })
  expressMultiplication: number;

  @Column({ type: 'float' })
  distanceFactor: number;

  @Column({ type: 'float' })
  distanceThreshold: number;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
