export type Home = {
  id: string;
  communityId: string;
  price: string;
  area: string;
  type: string;
};

export type HomeFilterParams = {
  sortBy?: "priceAsc" | "priceDesc" | "sqftAsc" | "sqftDesc" | "";
  homeType?: string;
  minPrice?: string;
  maxPrice?: string;
  minSqft?: string;
  maxSqft?: string;
};
