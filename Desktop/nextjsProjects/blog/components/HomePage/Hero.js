import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/abhishek.png"
          alt="Devloper's Image"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>Hi, I'm Abhishek</h1>
      <p>
        I blog about Java, Web development,Data analytics, AI, ML,Data
        science,Devops,Red Hat ansible, Playbooks, Python and a lot of stuffs.
      </p>
    </section>
  );
}
