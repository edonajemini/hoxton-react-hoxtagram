import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./components/Post";
import { Logo } from "./components/Logo";
import { AddPost } from "./components/AddPost";

function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((resp) => resp.json())
      .then((imagesFromServer) => setImages(imagesFromServer));
    fetch("http://localhost:3000/comments")
      .then((resp) => resp.json())
      .then((commentsFromServer) => setComments(commentsFromServer));
  }, []);

  return (
    
    <div className="App">
      <Logo />
      <section className="image-container">
        <Post />
        <AddPost />
      </section>
    </div>
  );
}

export default App;