import { Attribution } from "~/components";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={classes["main"]}>
        <p>Nice</p>
      </main>
      <Attribution />
    </>
  );
}
