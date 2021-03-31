import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [name, setName] = useState('mario');
  const [blogs, setBlogs] = useState(null);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
      });
    // console.log('use effect ran');
    // console.log(name);
  }, []); // if we want to use useEffect in a dymamic variable just put in the array. Ex: "[name]"

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
      )}
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
