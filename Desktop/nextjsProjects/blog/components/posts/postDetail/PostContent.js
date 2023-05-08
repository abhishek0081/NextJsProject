import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import classes from "./postContent.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighLighter } from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import csharp from "react-syntax-highlighter/dist/cjs/languages/prism/csharp";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import c from "react-syntax-highlighter/dist/cjs/languages/prism/c";
import go from "react-syntax-highlighter/dist/cjs/languages/prism/go";
import swift from "react-syntax-highlighter/dist/cjs/languages/prism/swift";
import kotlin from "react-syntax-highlighter/dist/cjs/languages/prism/kotlin";
import nginx from "react-syntax-highlighter/dist/cjs/languages/prism/nginx";
import ps from "react-syntax-highlighter/dist/cjs/languages/prism/powershell";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import csp from "react-syntax-highlighter/dist/cjs/languages/prism/csp";

SyntaxHighLighter.registerLanguage("js", js);
SyntaxHighLighter.registerLanguage("css", css);
SyntaxHighLighter.registerLanguage("java", java);
SyntaxHighLighter.registerLanguage("go", go);
SyntaxHighLighter.registerLanguage("kotlin", kotlin);
SyntaxHighLighter.registerLanguage("nginx", nginx);
SyntaxHighLighter.registerLanguage("ps", ps);
SyntaxHighLighter.registerLanguage("bash", bash);
SyntaxHighLighter.registerLanguage("c", c);
SyntaxHighLighter.registerLanguage("csharp", csharp);
SyntaxHighLighter.registerLanguage("swift", swift);
SyntaxHighLighter.registerLanguage("python", python);
SyntaxHighLighter.registerLanguage("csp", csp);

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    p: ({ node, ...props }) => {
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/nextjs-file-based-routing/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{props.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      console.log(className.split("-")[1]);
      return (
        <SyntaxHighLighter
          style={a11yDark}
          language={className.split("-")[1]}
          children={children[0]}
        ></SyntaxHighLighter>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
