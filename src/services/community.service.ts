import { Community } from "../types/community.type";
import http from "../http.common";
import axios from "axios";
import { Home } from "../types/home.type";

export const getCommunities = async () => {
  try {
    return http.get<Array<Community>>("/communities.json");
  } catch (err: unknown) {
    throw new Error("Error getting Communities");
  }
};

export const formatCurrency = (amount: string): string => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseInt(amount));

  return formattedAmount;
};

const calculateAveragePrice = (homes: Home[]) => {
  if (homes.length === 0) return 0;

  const total = homes.reduce((sum, home) => sum + parseFloat(home.price), 0);
  return total / homes.length;
};

export const findAveragePricesOfHome = async () => {
  const res: Record<string, number> = {};
  try {
    const homeRes = await axios.get<Home[]>("/api/homes.json");
    const homes = homeRes.data;

    const communityRes = await axios.get<Community[]>("/api/communities.json");
    const communities = communityRes.data;

    communities.forEach(({ name, id }) => {
      const communityHomes = homes.filter((home) => home.communityId === id);
      const averagePrice = calculateAveragePrice(communityHomes);
      res[name] = averagePrice;
    });

    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
