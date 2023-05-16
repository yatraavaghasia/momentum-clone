import react, { useEffect, useState } from "react";
import axios from 'axios';

const PostComponent = () => {
    const [posts, setPosts] = react.useState([]);
    react.useEffect(() => {
        const fetchPosts = async() => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    },[]);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PostComponent;
