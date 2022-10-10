import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Audiences } from "./Audiences";
import { Majors } from "./Majors";

@Index("classes_majors_major_code_fk", ["classMajor"], {})
@Entity("classes", { schema: "istech_management" })
export class Classes {
  @Column("varchar", { primary: true, name: "class_code", length: 12 })
  classCode: string;

  @Column("varchar", { name: "class_major", length: 12 })
  classMajor: string;

  @Column("int", { name: "total_students", nullable: true })
  totalStudents: number | null;

  @Column("tinyint", {
    name: "graduated_status",
    width: 1,
    default: () => "'0'",
  })
  graduatedStatus: boolean;

  @OneToMany(() => Audiences, (audiences) => audiences.class2)
  audiences: Audiences[];

  @ManyToOne(() => Majors, (majors) => majors.classes, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "class_major", referencedColumnName: "majorCode" }])
  classMajor2: Majors;
}
