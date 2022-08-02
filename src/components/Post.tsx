import { Comments } from "./Comments";
import { Images } from "./Images";
import { Title } from "./Title";
import { Likes } from "./Likes";

export function Post() {
  return (

    <article className="image-card">
      <Title />
      <Images />
      <Likes />
      <Comments />
    </article>
  );
}