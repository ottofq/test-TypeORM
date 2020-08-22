import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { userInfo } from "os";
import User from "./User";
import Menu from "./Menu";

@Entity("ratings")
export default class Rating {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "starter_course" })
  starterCourse: number;

  @Column()
  protein: number;

  @Column()
  accompany: number;

  @Column()
  garnish: number;

  @Column()
  dessert: number;

  @Column()
  comment: string;

  @ManyToOne((type) => User, (user) => user.ratings)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne((type) => Menu, (menu) => menu.ratings)
  @JoinColumn({ name: "menu_id" })
  menu: Menu;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
