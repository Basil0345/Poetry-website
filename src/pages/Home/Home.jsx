import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchLatestPost = async () => {
    try {
      let response = await fetch("/api/posts/fetchlastestpost");
      response = await response.json();
      let data = response;
      if (data === null) {
        throw new Error("Not Found");
      }
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchLatestPost();
  }, []);

  return (
    <section className="app__home">
      <h1>Latest Release </h1>
      {loading ? (
        <Spinner />
      ) : (
        <Link to={`/poems/${post.slug}`}>
          <img className="app__home-imgcard" src={post.image} alt="" />
        </Link>
      )}
    </section>
  );
};

export default Home;
