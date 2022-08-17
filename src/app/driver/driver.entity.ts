import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'driver' })
export class DriverEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'birth_date', type: 'timestamp', nullable: false })
  birthDate: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'national_registration', nullable: false, unique: true })
  nationalRegistration: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
