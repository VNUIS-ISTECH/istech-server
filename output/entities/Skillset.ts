import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Members } from "./Members";
import { Skills } from "./Skills";

@Index("skillset_account__fk", ["account"], {})
@Index("skillset_skill__fk", ["skill"], {})
@Entity("skillset", { schema: "istech_management" })
export class Skillset {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "account", length: 64 })
  account: string;

  @Column("int", { name: "skill" })
  skill: number;

  @Column("tinyint", {
    name: "is_primary_skill",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isPrimarySkill: boolean | null;

  @Column("tinyint", {
    name: "is_secondary_skill",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isSecondarySkill: boolean | null;

  @Column("tinyint", {
    name: "percentage",
    nullable: true,
    default: () => "'0'",
  })
  percentage: number | null;

  @ManyToOne(() => Members, (members) => members.skillsets, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "account", referencedColumnName: "account" }])
  account2: Members;

  @ManyToOne(() => Skills, (skills) => skills.skillsets, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "skill", referencedColumnName: "id" }])
  skill2: Skills;
}
