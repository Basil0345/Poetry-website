import React, { useEffect, useState } from "react";
import "./Post.css";
import { useParams } from "react-router-dom";
import { images } from "../../constants";

const Post = () => {
  let { slug } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPoem = async () => {
    try {
      const response = await fetch(`/api/posts/fetchpoem/${slug}`);
      let data = await response.json();
      if (data === null) {
        throw new Error(`Not Found`);
      }
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPoem();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // eslint-disable-next-line
  }, []);

  return (
    <section className="app__post" style={{ whiteSpace: "pre-wrap" }}>
      {loading ? (
        <img src={images.loading} alt="" />
      ) : (
        <>
          <h1>{post.title}</h1>
          <div className="app__post-content">
            {post?.content?.map((item, index) => {
              return <p key={index}>{item.replace(/\\n/g, "\n")}</p>;
            })}
          </div>
          <div className="app__post-signature">
            <img src={images.signature} alt="" />
          </div>
        </>
      )}
    </section>
  );
};

export default Post;
