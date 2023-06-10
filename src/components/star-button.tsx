import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import classes from "./star-button.module.scss";
import { StarIcon } from "~/icons";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export const StarButton = ({ className, ...restProps }: Props) => {
  return (
    <button className={clsx(classes["button"], className)} {...restProps}>
      <StarIcon />
    </button>
  );
};
