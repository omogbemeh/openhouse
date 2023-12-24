import { FC, useEffect, useState } from "react";
import ListView from "../components/list/list-view/ListView";
import { getCommunities } from "../services/community.service";
import { Community } from "../types/community.type";

const CommunitiesPage: FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    retrieveCommunities();
  }, []);

  const retrieveCommunities = async () => {
    await getCommunities()
      .then((res) => {
        const data = res?.data;
        if (data) {
          sortCommunitiesAlphabetically(data);
          setCommunities(data);
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const sortCommunitiesAlphabetically = (arr: Community[]) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <>
      <h1 className="center-text mb-3">Explore OpenHouse Communities</h1>
      {communities && <ListView items={communities} />}
    </>
  );
};

export default CommunitiesPage;
