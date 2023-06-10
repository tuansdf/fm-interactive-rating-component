import classes from "./attribution.module.scss";

export const Attribution = () => {
  return (
    <div className={classes["attribution"]}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Tuan Nguyen</a>.
    </div>
  );
};
