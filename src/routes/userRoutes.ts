import { Router, Response, Request } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../respositories/UserRepository";

const userRoutes = Router();

userRoutes.post("/", async (request: Request, response: Response) => {
  try {
    const { name, email } = request.body;
    const userRepository = getCustomRepository(UserRepository);

    const user = userRepository.create({ name, email });
    console.log(user);
    await userRepository.save(user);

    return response.status(201).send();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

userRoutes.get("/", async (request: Request, response: Response) => {
  try {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find();

    return response.status(201).json(users);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default userRoutes;
