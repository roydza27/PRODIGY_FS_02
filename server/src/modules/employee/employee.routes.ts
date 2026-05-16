import { Router } from "express";
import {
  createEmployeeController,
  deleteEmployeeController,
  getAllEmployeesController,
  getEmployeeByIdController,
  updateEmployeeController,
} from "./employee.controller";

import { createEmployeeSchema, updateEmployeeSchema } from "./employee.validation";
import { protect, authorizeRoles } from "@/middlewares/auth.middleware";
import { validateBody } from "@/middlewares/validateBody.middleware";

const router = Router();

router.use(protect);
router.use(authorizeRoles("admin"));

router.post("/", validateBody(createEmployeeSchema), createEmployeeController);
router.get("/", getAllEmployeesController);
router.get("/:id", getEmployeeByIdController);
router.patch("/:id", validateBody(updateEmployeeSchema), updateEmployeeController);
router.delete("/:id", deleteEmployeeController);

export default router;