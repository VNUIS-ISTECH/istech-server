import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Events } from "../events/events.entity";
import { Members } from "../members/members.entity";

@Index("event_coordinators_events_id_fk", ["eventId"], {})
@Index("event_coordinators_members_account_fk", ["memberAccount"], {})
@Entity("event_coordinators", { schema: "istech_management" })
export class EventCoordinators {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "event_id" })
  eventId: number;

  @Column("varchar", { name: "member_account", length: 64 })
  memberAccount: string;

  @Column("text", { name: "role", nullable: true })
  role: string | null;

  @Column("tinyint", { name: "is_organizer", width: 1, default: () => "'1'" })
  isOrganizer: boolean;

  @ManyToOne(() => Events, (events) => events.eventCoordinators2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "event_id", referencedColumnName: "id" }])
  event: Events;

  @ManyToOne(() => Members, (members) => members.eventCoordinators, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "member_account", referencedColumnName: "account" }])
  memberAccount2: Members;
}
