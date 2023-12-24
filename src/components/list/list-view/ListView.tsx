import { FC, ReactNode, useEffect, useState } from "react";
import { ListViewContainer } from "./ListView.styles";
import ListItems from "../list-items/ListItems";
import { Community } from "../../../types/community.type";
import { Home } from "../../../types/home.type";

interface ListViewProps {
  children?: ReactNode;
  items: Community[] | Home[];
}

const ListView: FC<ListViewProps> = ({ items }) => {
  useEffect(() => {}, []);
  return (
    <>
      <ListViewContainer>
        <ListItems items={items} />
      </ListViewContainer>
    </>
  );
};

export default ListView;
