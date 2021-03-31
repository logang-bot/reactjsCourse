import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(e => {
          setIsPending(false);
          setError(e.message);
        });
    }, 1000);
  }, []); // if we want to use useEffect in a dymamic variable just put in the array. Ex: "[name]"

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <button onClick={() => setName('luigi')}>Change name</button>
      <p>{name}</p> */}
      {/* <BlogList
        blogs={blogs.filter(blog => blog.author === 'mario')}
        title="Mario's Blogs!"
      /> */}
    </div>
  );
};

export default Home;
