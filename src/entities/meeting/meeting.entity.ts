import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { DateTimeEntity } from '../base/dateTimeEntity';

@Entity('meeting', { orderBy: { id: 'ASC' } })
export class Meeting extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  @Unique(['host'])
  host: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  when: string;

  @Column({ type: 'json' })
  attendees: string;
}
