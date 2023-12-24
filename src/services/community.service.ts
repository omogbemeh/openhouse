import { Community } from "../types/community.type";
import http from "../http.common";

export const getCommunities = async () => {
  try {
    return http.get<Array<Community>>("/communities.json");
  } catch (err: unknown) {
    console.log("***errr " + err);
  }
};

export const formatCurrency = (amount: string): string => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseInt(amount));

  return formattedAmount;
};
