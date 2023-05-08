import PostGrid from "./PostGrid";
import classes from "./allPosts.module.css";

export default function AllPostsComponent(props) {
  return (
    <section className={classes.posts}>
      <h1>ALL POSTS</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
