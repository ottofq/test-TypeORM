import { Router, Response, Request } from "express";
import { getCustomRepository } from "typeorm";
import MenuRepository from "../respositories/MenuRepository";

const menuRoutes = Router();

menuRoutes.post("/", async (request: Request, response: Response) => {
  try {
    const {
      starterCourse,
      protein,
      accompany,
      garnish,
      dessert,
    } = request.body;
    const menuRepository = getCustomRepository(MenuRepository);

    const menu = menuRepository.create({
      starterCourse,
      protein,
      accompany,
      garnish,
      dessert,
    });

    const menuCreated = await menuRepository.save(menu);
    console.log(menuCreated);

    return response.status(201).send();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

menuRoutes.get("/", async (request: Request, response: Response) => {
  try {
    const menuRepository = getCustomRepository(MenuRepository);

    const menus = await menuRepository.find();

    return response.status(201).json(menus);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default menuRoutes;
