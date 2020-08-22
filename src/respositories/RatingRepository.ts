import { Repository, EntityRepository } from "typeorm";
import Rating from "../models/Rating";

@EntityRepository(Rating)
export default class UserRepository extends Repository<Rating> {}
