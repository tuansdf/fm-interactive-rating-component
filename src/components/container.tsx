import clsx from "clsx";
import { HTMLAttributes } from "react";
import classes from "./container.module.scss";

type Props = HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, className, ...restProps }: Props) => {
  return (
    <div className={clsx(classes["container"], className)} {...restProps}>
      {children}
    </div>
  );
};
