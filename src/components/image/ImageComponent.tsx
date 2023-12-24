import { useState, useEffect, FC } from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: FC<ImageComponentProps> = ({ src, alt }) => {
  const [url, setUrl] = useState(src);

  useEffect(() => {
    const validateImage = async () => {
      const img = new Image();

      img.onerror = () => {
        // Image failed to load
        setUrl("");
      };

      img.src = url;
    };

    validateImage();
  }, [url]);

  return url !== "" ? <img src={url} alt={alt} /> : <span></span>;
};

export default ImageComponent;
