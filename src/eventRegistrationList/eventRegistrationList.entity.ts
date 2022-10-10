import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Audiences } from "../audiences/audiences.entity";
  import { Events } from "../events/events.entity";

  @Index("event_registration_audience__fk", ["audienceId"], {})
  @Index("event_registration_id__fk", ["eventId"], {})
  @Entity("event_registration_list", { schema: "istech_management" })
  export class EventRegistrationList {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("int", { name: "audience_id", nullable: true })
    audienceId: number | null;

    @Column("datetime", {
      name: "registered_at",
      nullable: true,
      default: () => "CURRENT_TIMESTAMP",
    })
    registeredAt: Date | null;

    @Column("int", { name: "event_id" })
    eventId: number;

    @ManyToOne(() => Audiences, (audiences) => audiences.eventRegistrationLists, {
      onDelete: "NO ACTION",
      onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "audience_id", referencedColumnName: "id" }])
    audience: Audiences;

    @ManyToOne(() => Events, (events) => events.eventRegistrationLists, {
      onDelete: "NO ACTION",
      onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "event_id", referencedColumnName: "id" }])
    event: Events;
  }
