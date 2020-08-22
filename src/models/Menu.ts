import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Rating from "./Rating";

@Entity("menus")
export default class Menu {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "starter_course" })
  starterCourse: string;

  @Column()
  protein: string;

  @Column()
  accompany: string;

  @Column()
  garnish: string;

  @Column()
  dessert: string;

  @OneToMany((type) => Rating, (rating) => rating.menu)
  ratings: Rating[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
