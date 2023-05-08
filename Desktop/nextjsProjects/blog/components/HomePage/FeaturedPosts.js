import PostGrid from "../posts/PostGrid";
import classes from "./featuredPosts.module.css";

export default function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
