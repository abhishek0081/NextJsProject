import Link from "next/link";
import classes from "./postItem.module.css";
import Image from "next/legacy/image";
export default function PostItem(props) {
  const { tilte, image, excerpt, date, slug } = props.post;
  const humanReadbleDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={tilte}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{tilte}</h3>
          <time>{humanReadbleDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
