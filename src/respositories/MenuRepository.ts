import { Repository, EntityRepository } from "typeorm";
import Menu from "../models/Menu";

@EntityRepository(Menu)
export default class UserRepository extends Repository<Menu> {}
