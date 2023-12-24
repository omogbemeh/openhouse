import { FC, useEffect, useState } from "react";
import {
  ListCardContainer,
  ListCardContentContainer,
  ListCardImageContainer,
} from "./ListCard.styles";
import { Link } from "react-router-dom";
import { Community } from "../../../types/community.type";
import { Home } from "../../../types/home.type";
import { formatCurrency } from "../../../services/community.service";
import ImageComponent from "../../image/ImageComponent";
import {
  getAverageHomePricePerCommunity,
  getHomes,
} from "../../../services/home.service";

type ListCardProps = {
  item: Community | Home;
};

const isCommunity = (item: Community | Home): item is Community => {
  return (item as Community).group !== undefined;
};

const RenderCommunity: FC<{ item: Community }> = ({ item }) => {
  const [homes, setHomes] = useState<Home[]>([]);
  const [avgHomePrice, setAvgHomePrice] =
    useState<Record<string, { total: number; count: number }>>();

  useEffect(() => {
    const retrieveHomes = async () => {
      getHomes().then((res) => {
        res?.data;
        if (res?.data) {
          setHomes(res.data);
        }
      });
    };

    retrieveHomes();
  }, []);

  useEffect(() => {
    setAvgHomePrice(getAverageHomePricePerCommunity(homes));
  }, [homes]);

  const { id, name, imgUrl, group } = item;

  const displayAveragePrice = (id: string) => {
    if (avgHomePrice) {
      const avg = avgHomePrice[id]?.total / avgHomePrice[id]?.count;

      if (!isNaN(avg)) {
        const avgAmount = formatCurrency(avg.toString());
        return avgAmount;
      } else {
        return "N/A";
      }
    }

    return "N/A";
  };

  return (
    <Link to={`/communities/${id}?avgPrice=${displayAveragePrice(id)}`}>
      <ListCardContainer>
        {imgUrl && (
          <ListCardImageContainer>
            <ImageComponent src={imgUrl} alt={name} />
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
            <strong>Average Home Price</strong>:{" "}
            {avgHomePrice && displayAveragePrice(id)}
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
