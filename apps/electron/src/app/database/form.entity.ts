import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FormEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Ficha de identificación
   */
  @Column({
    type: "text",
    nullable: false,
  })
  name: string;

  @Column({
    type: "text",
    nullable: false,
  })
  fatherName: string;

  @Column({
    type: "text",
    nullable: false,
  })
  motherName: string;

  @Column({
    type: "text",
    nullable: false,
  })
  sex: string;

  @Column({
    type: "text",
    nullable: false,
  })
  civilState: string;

  @Column({
    type: "integer",
    nullable: false,
  })
  birthDate: number;

  @Column({
    type: "text",
    nullable: false,
  })
  placeOfBirth: string;

  @Column({
    type: "text",
    nullable: false,
  })
  schooling: string;

  @Column({
    type: "text",
    nullable: false,
  })
  religion: string;

  @Column({
    type: "text",
    nullable: false,
  })
  address: string;

  @Column({
    type: "integer",
    nullable: false,
  })
  phone: number;

  @Column({
    type: "text",
    nullable: false,
  })
  emergencyContactName: string;

  @Column({
    type: "integer",
    nullable: false,
  })
  emergencyContactNumber: number;

  @Column({
    type: "text",
    nullable: false,
  })
  bloodGroup: string;

  /**
   * Antecedentes personales no patologicos
   */

  /**
   * Antecedentes heredofamiliares
   */
  // @Column({
  //   type: "text",
  //   nullable: false,
  // })
  // diagnosedDiseases: string; // Enfermedades diagnosticadas
}
