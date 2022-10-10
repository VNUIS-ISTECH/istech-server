import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { EventCoordinators } from "../eventCoordinators/eventCoordinators.entity";
  import { EventRegistrationList } from "../eventRegistrationList/eventRegistrationList.entity";

  @Index("events_members_account_fk", ["eventPic"], {})
  @Entity("events", { schema: "istech_management" })
  export class Events {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "event_name", nullable: true, length: 500 })
    eventName: string | null;

    @Column("varchar", { name: "event_pic", nullable: true, length: 64 })
    eventPic: string | null;

    @Column("varchar", {
      name: "event_target_audience",
      nullable: true,
      length: 255,
    })
    eventTargetAudience: string | null;

    @Column("int", { name: "event_coordinators", nullable: true })
    eventCoordinators: number | null;

    @Column("datetime", { name: "date_hosted", nullable: true })
    dateHosted: Date | null;

    @Column("tinyint", { name: "active", nullable: true, width: 1 })
    active: boolean | null;

    @Column("int", { name: "event_registration_list", nullable: true })
    eventRegistrationList: number | null;

    @Column("int", { name: "event_assets", nullable: true })
    eventAssets: number | null;

    @Column("text", { name: "description", nullable: true })
    description: string | null;

    @Column("int", { name: "event_survey_report", nullable: true })
    eventSurveyReport: number | null;

    @Column("datetime", { name: "created_at", nullable: true })
    createdAt: Date | null;

    @Column("varchar", { name: "created_by", nullable: true, length: 64 })
    createdBy: string | null;

    @OneToMany(
      () => EventCoordinators,
      (eventCoordinators) => eventCoordinators.event
    )
    eventCoordinators2: EventCoordinators[];

    @OneToMany(
      () => EventRegistrationList,
      (eventRegistrationList) => eventRegistrationList.event
    )
    eventRegistrationLists: EventRegistrationList[];
  }
