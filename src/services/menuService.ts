import axios from "axios";
import { MenuResponse } from "../types";

const apiUrl: string =
  process.env.GET_API_URL ||
  "https://bite-test-pos-production.herokuapp.com/locations/123/menu";

console.error(`API: ${apiUrl}`);
export const syncMenu = async () => {
  try {
    const response = await axios.get<MenuResponse>(apiUrl);
    const menuData = response.data;
    console.log("Fetched menu data:", menuData);
    return menuData;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    throw error;
  }
};
