import { FC, ReactElement } from "react";

type ImageProps = {
  path: string;
  alt: string;
};

export const Image: FC<ImageProps> = ({ path, alt }): ReactElement => {
  return (
    <img
      // src={require(`images/${path}?webp`)}
      src={require(`images/${path}`)}
      alt={alt}
      // onError={(e: any) => {
      //   e.target.onerror = null;
      //   e.target.src = `images/${path}`;
      // }}
    />
  );
};
