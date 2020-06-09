import { FC, ReactElement } from "react";

type ImageProps = {
  path: string;
  alt: string;
  style?: any;
  className?: string;
};

export const Image: FC<ImageProps> = ({
  path,
  alt,
  ...props
}): ReactElement => {
  return <img {...props} src={require(`images/${path}`)} alt={alt} />;
};
