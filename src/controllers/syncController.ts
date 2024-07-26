import { Request, Response } from "express";
import { syncMenu } from "../services/menuService";

export const triggerSync = async (req: Request, res: Response) => {
  try {
    const data = await syncMenu();
    res.status(200).json({ data: data });
  } catch (error) {
    console.error("Error during menu sync:", error);
    res.status(500).send("Failed to sync menu");
  }
};
