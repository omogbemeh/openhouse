import http from "../http.common";
import { Community } from "../types/community.type";
import { Home } from "../types/home.type";

export const getHomes = async () => {
  try {
    return http.get<Array<Home>>("/homes.json");
  } catch (err: unknown) {
    console.log("***errr " + err);
  }
};

export const getCommunityForHomeByCommunityId = (
  communities: Community[],
  communityId: string
) => {
  return communities.find((community) => community.id === communityId);
};

export const getAverageHomePricePerCommunity = (homes: Home[]) => {
  const res: Record<string, { total: number; count: number }> = {};
  homes.forEach((home) => {
    if (res[home.communityId] === undefined) {
      res[home.communityId] = { total: 0, count: 0 };
    }
    res[home.communityId].total += parseFloat(home.price);
    res[home.communityId].count++;
  });
  return res;
};
