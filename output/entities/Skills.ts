import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Audiences } from "./Audiences";
import { Skillset } from "./Skillset";

@Entity("skills", { schema: "istech_management" })
export class Skills {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "skill_name", nullable: true, length: 255 })
  skillName: string | null;

  @Column("varchar", { name: "skill_type", nullable: true, length: 255 })
  skillType: string | null;

  @OneToMany(() => Audiences, (audiences) => audiences.interestedIn2)
  audiences: Audiences[];

  @OneToMany(() => Skillset, (skillset) => skillset.skill2)
  skillsets: Skillset[];
}
