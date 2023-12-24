import { FC } from "react";
import ListCard from "../list-card/ListCard";
import { ListItemsContainer } from "../list-view/ListView.styles";
import { Community } from "../../../types/community.type";
import { Home } from "../../../types/home.type";

interface ListItemsProps {
  items: Community[] | Home[];
}

export const RenderItems: FC<Community[] | Home[]> = (items) => {
  return items.map((item) => <ListCard key={item.id} item={item} />);
};

const ListItems: FC<ListItemsProps> = ({ items }) => {
  return (
    <>
      <ListItemsContainer>{RenderItems(items)}</ListItemsContainer>
    </>
  );
};

export default ListItems;
