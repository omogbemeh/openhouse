export const checkImage = (url: string) => {
  const img = new Image();
  img.src = url;

  img.onload = () => {
    return url;
  };

  img.onerror = () => {
    return false;
  };
};

export const createSlug = (string: string) => {
  return string.toLowerCase().replace(/\s+/g, "-");
};

export const compareSlugToString = (slug: string, originalString: string) => {
  return slug.toLowerCase() === createSlug(originalString).toLowerCase();
};
