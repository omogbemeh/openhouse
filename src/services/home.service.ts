import http from "../http.common";
import { Home } from "../types/home.type";

export const getHomes = async () => {
  try {
    return http.get<Array<Home>>("/homes.json");
  } catch (err: unknown) {
    console.log("***errr " + err);
  }
};
