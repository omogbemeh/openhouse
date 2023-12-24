import { FC, useEffect } from "react";
import {
  ListCardContainer,
  ListCardContentContainer,
  ListCardImageContainer,
} from "./ListCard.styles";
import { Link } from "react-router-dom";
import { Community } from "../../../types/community.type";
import { Home } from "../../../types/home.type";
import { formatCurrency } from "../../../services/community.service";

type ListCardProps = {
  item: Community | Home;
};

const isCommunity = (item: Community | Home): item is Community => {
  return (item as Community).group !== undefined;
};

const RenderCommunity: FC<{ item: Community }> = ({ item }) => {
  const { id, name, imgUrl, group } = item;
  return (
    <Link to={`/communities/${id}`}>
      <ListCardContainer>
        {imgUrl && (
          <ListCardImageContainer>
            <img src={imgUrl} alt={id} />
          </ListCardImageContainer>
        )}
        <ListCardContentContainer className="left-text">
          <p>
            <strong>Community</strong>: {name}
          </p>
          <p>
            <strong>Community Group</strong>: {group}
          </p>
          <p>
            <Link to={`/communities/${id}`}>
              View Homes in {name} community
            </Link>
          </p>
        </ListCardContentContainer>
      </ListCardContainer>
    </Link>
  );
};

const RenderHome: FC<{ item: Home }> = ({ item }) => {
  return (
    <ListCardContainer>
      <ListCardContentContainer className="left-text">
        <p>
          <strong>Price</strong>: {formatCurrency(item.price)}
        </p>
        <p>
          <strong>Area (sqft)</strong>: {item.area}
        </p>
        <p>
          <strong>Type</strong>: {item.type}
        </p>
      </ListCardContentContainer>
    </ListCardContainer>
  );
};

const ListCard: FC<ListCardProps> = ({ item }) => {
  useEffect(() => {}, []);

  const determineTypeOfItemAndRender = (item: Community | Home) => {
    if (isCommunity(item)) {
      return <RenderCommunity item={item} />;
    } else {
      return <RenderHome item={item} />;
    }
  };

  return determineTypeOfItemAndRender(item);
};

export default ListCard;
