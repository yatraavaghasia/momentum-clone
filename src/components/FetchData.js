import react, { useEffect, useState } from "react";
import axios from 'axios';

const PostComponent = () => {
    const [posts, setPosts] = react.useState([]);
    react.useEffect(() => {
        const fetchPosts = async() => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const randomIndex = Math.floor(Math.random()*response.data.length);
                setPosts(response.data[randomIndex]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    },[]);
    const handleRefresh = () => {
    window.location.reload(); // Refresh the page to get a new post
  };
    return (
        <div>
            <h2>Posts</h2>
            {posts ? (
                <div>
                <h3>{posts.title}</h3>
                <p>{posts.body}</p>
                </div>
            ):(
                <p>Loading...</p>
            )}
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    );
};
export default PostComponent;