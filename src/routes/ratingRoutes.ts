import { Router, Response, Request } from "express";
import { getCustomRepository } from "typeorm";
import RatingRepository from "../respositories/RatingRepository";
import User from "../models/User";

const ratingRoutes = Router();

ratingRoutes.post("/", async (request: Request, response: Response) => {
  try {
    const {
      starterCourse,
      protein,
      accompany,
      garnish,
      dessert,
      comment,
      user,
      menu,
    } = request.body;

    const ratingRepository = getCustomRepository(RatingRepository);

    const rating = ratingRepository.create({
      starterCourse,
      protein,
      accompany,
      garnish,
      dessert,
      comment,
      user,
      menu,
    });

    await ratingRepository.save(rating);

    return response.status(201).send();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

ratingRoutes.get("/:menu", async (request: Request, response: Response) => {
  const { menu } = request.params;

  try {
    const ratingRepository = getCustomRepository(RatingRepository);

    const ratings = await await ratingRepository.find({ where: { menu } });

    return response.status(201).json(ratings);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

ratingRoutes.get(
  "/comments/:menu",
  async (request: Request, response: Response) => {
    const { menu } = request.params;

    try {
      const ratingRepository = getCustomRepository(RatingRepository);

      const ratings = await await ratingRepository.find({
        select: ["user", "comment"],
        where: { menu },
        relations: ["user"],
      });

      return response.status(201).json(ratings);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
);

export default ratingRoutes;
