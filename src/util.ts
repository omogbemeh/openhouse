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

export function isValidImageUrl(url: string) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

export async function checkImageUrl(url: string) {
  const isValid = await isValidImageUrl(url);
  return isValid;
}
