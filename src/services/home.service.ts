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
