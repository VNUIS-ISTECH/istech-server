import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Departments } from "../departments/departments.entity";
import { Members } from "../members/members.entity";

@Index("leaders_department__fk", ["leadDepartment"], {})
@Index("leaders_member_account__fk", ["leadAccount"], {})
@Entity("leaders", { schema: "istech_management" })
export class Leaders {
  @PrimaryColumn("varchar", { name: "lead_account", length: 64 })
  leadAccount: string | null;

  @Column("varchar", { name: "lead_department", length: 5 })
  leadDepartment: string;

  @ManyToOne(() => Departments, (departments) => departments.leaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "lead_department", referencedColumnName: "departmentCode" },
  ])
  leadDepartment2: Departments;

  @ManyToOne(() => Members, (members) => members.leaders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "lead_account", referencedColumnName: "account" }])
  leadAccount2: Members;
}
