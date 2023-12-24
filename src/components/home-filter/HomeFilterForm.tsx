import { ChangeEvent, FC, FormEvent, useState } from "react";
import { HomeFilterParams } from "../../types/home.type";

interface HomeFilterFormProps {
  getFilterParams: (data: HomeFilterParams) => void;
  filterParams?: HomeFilterParams;
  homeTypes: string[];
}

const HomeFilterForm: FC<HomeFilterFormProps> = ({
  getFilterParams,
  filterParams,
  homeTypes,
}) => {
  const [formData, setFormData] = useState<HomeFilterParams>({
    ...filterParams,
  });

  const [errors, setErrors] = useState<HomeFilterParams>({
    sortBy: "",
    homeType: "",
    minPrice: "",
    maxPrice: "",
    minSqft: "",
    maxSqft: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { minPrice, maxPrice, minSqft, maxSqft } = formData;
    e.preventDefault();
    // Validate that minPrice is less than maxPrice only if both are provided
    if (
      minPrice !== "" &&
      maxPrice !== "" &&
      Number(minPrice) >= Number(maxPrice)
    ) {
      setErrors({
        ...errors,
        minPrice: "Min Price must be less than Max Price",
        maxPrice: "",
      });
      return;
    }

    // Validate that minSqft is less than maxSqft only if both are provided
    if (
      minSqft !== "" &&
      maxSqft !== "" &&
      Number(minSqft) >= Number(maxSqft)
    ) {
      setErrors({
        ...errors,
        minSqft: "Min Sqft must be less than Max Sqft",
        maxSqft: "",
      });
      return;
    }

    getFilterParams(formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Validate numeric values
    if (
      ["minPrice", "maxPrice", "minSqft", "maxSqft"].includes(name) &&
      isNaN(Number(value))
    ) {
      setErrors({
        ...errors,
        [name]: `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } must be a number`,
      });
      return;
    }

    // Update form data and clear errors if validation passes
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const resetForm = () => {
    setFormData({
      ...formData,
      sortBy: "",
      homeType: "",
      minPrice: "",
      maxPrice: "",
      minSqft: "",
      maxSqft: "",
    });
    setErrors({
      ...errors,
      sortBy: "",
      homeType: "",
      minPrice: "",
      maxPrice: "",
      minSqft: "",
      maxSqft: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <label htmlFor="sortBy">Sort By</label>
          <select
            name="sortBy"
            title="Sort By"
            onChange={handleChange}
            value={formData.sortBy}
          >
            <option key="none" value=""></option>
            <option key="priceAsc" value="priceAsc">
              Price - Ascending
            </option>
            <option key="priceDesc" value="priceDesc">
              Price - Descending
            </option>
            <option key="sqftAsc" value="sqftAsc">
              Sqft - Ascending
            </option>
            <option key="sqftDesc" value="sqftDesc">
              Sqft - Descending
            </option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <label htmlFor="homeType">Type</label>
          <select
            name="homeType"
            title="Home Type"
            onChange={handleChange}
            value={formData.homeType}
          >
            <option key="" value=""></option>

            {homeTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <label htmlFor="minPrice">Min Price</label>
          <input
            name="minPrice"
            type="text"
            placeholder="50,000"
            pattern="\d*"
            value={formData.minPrice}
            onChange={handleChange}
          />
        </div>
        <small>{errors.minPrice}</small>
      </div>

      <div className="form-group">
        <div className="input-group">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            name="maxPrice"
            type="text"
            placeholder="900,000"
            pattern="\d*"
            value={formData.maxPrice}
            onChange={handleChange}
          />
        </div>
        <small>{errors.maxPrice}</small>
      </div>

      <div className="form-group">
        <div className="input-group">
          <label htmlFor="Price Range">Min Sqft</label>
          <input
            name="minSqft"
            type="text"
            placeholder="50,000"
            pattern="\d*"
            value={formData.minSqft}
            onChange={handleChange}
          />
        </div>
        <small>{errors.minSqft} </small>
      </div>

      <div className="form-group">
        <div className="input-group">
          <label htmlFor="maxSqft">Max Sqft</label>
          <input
            name="maxSqft"
            placeholder="50,000"
            type="number"
            value={formData.maxSqft}
            onChange={handleChange}
          />
        </div>
        <small>{errors.maxSqft}</small>
      </div>

      <div className="form-buttons">
        <button type="reset" onClick={resetForm}>
          Reset
        </button>
        <button type="submit">Apply Filters</button>
        <button type="button">Close Modal</button>
      </div>
    </form>
  );
};

export default HomeFilterForm;
