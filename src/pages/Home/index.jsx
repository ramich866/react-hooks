import React, { useEffect, useState } from "react";
import { request } from "../../utils/remote/axios";
import { requestMethods } from "../../utils/enums/request.methods";

const Home = () => {
  const [state, setState] = useState(0);
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);

  // on Each render
  // useEffect(() => {
  //   console.log("Effect executed");
  // }); // without passing deps array => on each render

  const getPosts = async () => {
    const response = await request({
      method: requestMethods.GET,
      route: "https://jsonplaceholder.typicode.com/posts",
    });

    console.log(response);

    setPosts(response);
  };

  // onLoad
  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []); // empty deps array => on initial render ONLY

  // onCHange of counter
  // useEffect(() => {
  //   // setCounter(counter + 1);
  // }, [counter]); // filling deps => watch on change of ANY of the deps states

  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click to change state {state}
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click to change counter {counter}
      </button>
      {posts.map((post) => (
        <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
