import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Posts.css";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(0);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/api/posts/getPosts/${page + 1}`);
      let data = await response.json();
      setPosts(posts.concat(data.posts));
      setTotalResults(data.totalResults);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="app__posts">
      <h1>Poems</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchPosts}
            hasMore={posts.length !== totalResults}
            loader={
              <p style={{ display: "flex", justifyContent: "center" }}>
                Scroll to loadmore...
              </p>
            }
          >
            <div className="app__posts-container">
              {posts.map((post) => {
                return (
                  <Card
                    key={post._id}
                    image={post.image}
                    text={post.title}
                    slug={post.slug}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </>
      )}
    </section>
  );
};

export default Posts;
