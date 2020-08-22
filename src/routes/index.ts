import { Router } from "express";
import userRoutes from "./userRoutes";
import menuRoutes from "./menuRoutes";
import ratingRoutes from "./ratingRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/menus", menuRoutes);
routes.use("/ratings", ratingRoutes);

export default routes;
