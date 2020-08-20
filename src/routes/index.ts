import { Router } from "express";
import userRoutes from "./userRoutes";
import menuRoutes from "./menuRoutes";
const routes = Router();

routes.use("/users", userRoutes);
routes.use("/menus", menuRoutes);
export default routes;
