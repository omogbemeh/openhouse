import { useEffect, useState } from "react";
import {
  CommunityPageContainer,
  CommunityPageImageContainer,
} from "./CommuityPage.styles";
import { Home } from "../../types/home.type";
import { useParams, useSearchParams } from "react-router-dom";
import { getHomes } from "../../services/home.service";
import { getCommunities } from "../../services/community.service";
import { Community } from "../../types/community.type";
import { RenderItems } from "../../components/list/list-items/ListItems";

const CommunityPage = () => {
  const [homes, setHomes] = useState<Home[]>([]);
  const [community, setCommunity] = useState<Community>();
  const { communityId } = useParams();
  const [searchParams] = useSearchParams();
  const averageHomePrice = searchParams.get("avgPrice");

  useEffect(() => {
    getCommunityInfo();
    retrieveHomes();
  });

  const getCommunityInfo = async () => {
    await getCommunities().then((res) => {
      if (res?.data) {
        const data = res.data;
        const foundCommunity = data.find((comm) => comm.id === communityId);
        if (foundCommunity) {
          setCommunity(foundCommunity);
        }
      }
    });
  };

  const retrieveHomes = async () => {
    await getHomes().then((res) => {
      if (res?.data) {
        let data = res.data;
        data = data.filter((home) => home.communityId === communityId);
        setHomes(data);
      }
    });
  };

  return (
    <CommunityPageContainer>
      {community && (
        <>
          <h1>The {community?.name} Community</h1>
          <CommunityPageImageContainer>
            <img src={community.imgUrl} alt="" />
          </CommunityPageImageContainer>
          <p className="center-text">
            This Community belongs to the <strong>{community.group}</strong>{" "}
            Group. An average home in {community.name} is{" "}
            {averageHomePrice === "N/A"
              ? "Not Availale at the moment"
              : averageHomePrice}
            .
          </p>
        </>
      )}

      {!homes && <p>There are no homes at this location right now</p>}
      {homes.length > 0 && (
        <>
          <h2>These are the homes in {community?.name}</h2> {RenderItems(homes)}
        </>
      )}
    </CommunityPageContainer>
  );
};

export default CommunityPage;
