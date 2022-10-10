import { Column, Entity, OneToMany } from "typeorm";
import { Leaders } from "../leaders/leaders.entity";

@Entity("departments", { schema: "istech_management" })
export class Departments {
  @Column("int", { name: "id" })
  id: number;

  @Column("varchar", { primary: true, name: "department_code", length: 5 })
  departmentCode: string;

  @Column("varchar", { name: "department_name", length: 255 })
  departmentName: string;

  @Column("varchar", { name: "lead", nullable: true, length: 64 })
  lead: string | null;

  @OneToMany(() => Leaders, (leaders) => leaders.leadDepartment2)
  leaders: Leaders[];
}
