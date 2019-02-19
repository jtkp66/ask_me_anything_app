import React from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
    return (
        <div>
            <h2>Page List</h2>
            <Link to="/posts/new">Page Two</Link>
            <hr />
            <Link to="/posts/edit">Page Three</Link>
            <hr />
            <Link to="/posts/delete">Page Four</Link>
            <hr />
            <Link to="/posts/show">Page Five</Link>
        </div>
    )
};

export default PostList;
