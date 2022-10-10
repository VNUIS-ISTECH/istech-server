import { Column, Entity, OneToMany } from "typeorm";
import { Classes } from "./Classes";

@Entity("majors", { schema: "istech_management" })
export class Majors {
  @Column("varchar", { primary: true, name: "major_code", length: 64 })
  majorCode: string;

  @Column("varchar", { name: "major_group", length: 64 })
  majorGroup: string;

  @Column("varchar", { name: "major_name_en", length: 255 })
  majorNameEn: string;

  @Column("varchar", { name: "major_name_vi", length: 255 })
  majorNameVi: string;

  @Column("text", { name: "desc_en", nullable: true })
  descEn: string | null;

  @Column("text", { name: "desc_vi", nullable: true })
  descVi: string | null;

  @OneToMany(() => Classes, (classes) => classes.classMajor2)
  classes: Classes[];
}
