import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import classes from "./submit-button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton = ({ children, className, ...restProps }: Props) => {
  return (
    <button className={clsx(classes["button"], className)} {...restProps}>
      {children}
    </button>
  );
};
