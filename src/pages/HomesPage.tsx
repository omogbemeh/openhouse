import { FC, useEffect, useState } from "react";
import ListView from "../components/list/list-view/ListView";
import { Home, HomeFilterParams } from "../types/home.type";
import { getHomes } from "../services/home.service";
import Modal from "../components/modal/Modal";
import HomeFilterForm from "../components/home-filter/HomeFilterForm";
import Button from "../components/button/Button";

const HomesPage: FC = () => {
  const [homes, setHomes] = useState<Home[]>([]);
  const [filteredHomes, setFilteredHomes] = useState<Home[]>([]);
  const [filterParams, setFilterParams] = useState<HomeFilterParams>({});
  const [homeTypes, setHomeTypes] = useState<string[]>([]);
  const [showfilters, toggleShowFilters] = useState(false);

  useEffect(() => {
    retrieveHomes();
  }, []);

  useEffect(() => {
    if (homes.length > 0) {
      filterHomes();
    }
  }, [filterParams, homes]);

  useEffect(() => {
    const homeTypes = homes.map((home) => home.type);
    const uniqueHomeTypesSet = new Set(homeTypes);
    const uniqueHomeTypesArray = [...uniqueHomeTypesSet];
    setHomeTypes(uniqueHomeTypesArray);
  }, [homes]);

  const retrieveHomes = async () => {
    await getHomes()
      .then((res) => {
        if (res?.data) {
          setHomes(res.data);
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const toggleFilters = () => {
    toggleShowFilters((curr) => !curr);
    if (showfilters) {
      document.body.classList.add("body-scroll-lock");
    } else {
      document.body.classList.remove("body-scroll-lock");
    }
  };

  const closeModal = () => {
    toggleShowFilters(false);
  };

  const getFilterParams = (params: HomeFilterParams) => {
    setFilterParams(params);
    closeModal();
  };

  const filterHomes = () => {
    const filtered = homes.filter((home) => {
      // Check home type
      if (filterParams?.homeType && home.type !== filterParams.homeType) {
        return false;
      }

      // Check price range
      if (
        (filterParams?.minPrice && home.price < filterParams.minPrice) ||
        (filterParams?.maxPrice && home.price > filterParams.maxPrice)
      ) {
        return false;
      }

      // Check square footage range
      if (
        (filterParams?.minSqft && home.area < filterParams.minSqft) ||
        (filterParams?.maxSqft && home.area > filterParams.maxSqft)
      ) {
        return false;
      }

      return true;
    });

    if (filterParams.sortBy) {
      switch (filterParams.sortBy) {
        case "priceAsc":
          filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          break;
        case "priceDesc":
          filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
          break;
        case "sqftAsc":
          filtered.sort((a, b) => parseInt(a.area) - parseInt(b.area));
          break;
        case "sqftDesc":
          filtered.sort((a, b) => parseInt(b.area) - parseInt(a.area));
          break;
        default:
          break;
      }
    }

    setFilteredHomes(filtered);
  };

  return (
    <>
      {showfilters && (
        <Modal closeModal={closeModal}>
          <HomeFilterForm
            homeTypes={homeTypes}
            getFilterParams={getFilterParams}
            filterParams={filterParams ? filterParams : {}}
          />
        </Modal>
      )}
      <h1 className="center-text">Discover OpenHouse Homes</h1>
      <Button className="my-3 center-text mx-auto" onClick={toggleFilters}>
        Filter And Sort
      </Button>
      {homes && (
        <>
          {Object.keys(filterParams).length !== 0 &&
            filteredHomes.length === 0 && (
              <div>
                <p className="center-text">
                  Nothing matched your filter criteria, Please try different
                  combinations
                </p>
              </div>
            )}
          <ListView items={filterParams ? filteredHomes : homes} />
        </>
      )}
    </>
  );
};

export default HomesPage;
