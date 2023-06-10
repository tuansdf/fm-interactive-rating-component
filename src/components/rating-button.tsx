import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import classes from "./rating-button.module.scss";

type Props = {
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const RatingButton = ({
  selected,
  children,
  className,
  ...restProps
}: Props) => {
  return (
    <button
      className={clsx(
        classes["button"],
        { [classes["is-selected"]]: selected },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
