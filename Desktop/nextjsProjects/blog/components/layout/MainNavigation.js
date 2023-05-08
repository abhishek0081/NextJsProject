import { Fragment } from "react";
import Logo from "./logo";
import Link from "next/link";
import classes from "./mainNavigation.module.css";

export default function MainNavigation() {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={"/posts"}>posts</Link>
            </li>
            <li>
              <Link href={"/contact"}>contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
