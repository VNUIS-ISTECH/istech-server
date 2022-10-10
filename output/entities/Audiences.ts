import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Classes } from "./Classes";
import { Skills } from "./Skills";
import { EventRegistrationList } from "./EventRegistrationList";

@Index("audiences_classes_class_code_fk", ["class"], {})
@Index("audiences_skills_id_fk", ["interestedIn"], {})
@Entity("audiences", { schema: "istech_management" })
export class Audiences {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "first_name", length: 255 })
  firstName: string;

  @Column("varchar", { name: "last_name", nullable: true, length: 255 })
  lastName: string | null;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("int", { name: "student_id", nullable: true })
  studentId: number | null;

  @Column("varchar", { name: "class", length: 12 })
  class: string;

  @Column("tinyint", { name: "is_vnuis_student", nullable: true, width: 1 })
  isVnuisStudent: boolean | null;

  @Column("int", { name: "total_events_registered", nullable: true })
  totalEventsRegistered: number | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("int", { name: "interested_in", nullable: true })
  interestedIn: number | null;

  @ManyToOne(() => Classes, (classes) => classes.audiences, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "class", referencedColumnName: "classCode" }])
  class2: Classes;

  @ManyToOne(() => Skills, (skills) => skills.audiences, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "interested_in", referencedColumnName: "id" }])
  interestedIn2: Skills;

  @OneToMany(
    () => EventRegistrationList,
    (eventRegistrationList) => eventRegistrationList.audience
  )
  eventRegistrationLists: EventRegistrationList[];
}
