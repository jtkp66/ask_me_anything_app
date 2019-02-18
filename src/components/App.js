import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PostCreate from './posts/PostCreate';
import PostList from './posts/PostList';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import PostShow from './posts/PostShow';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PostList} />
                    <Route path="/posts/new" exact component={PostCreate} />
                    <Route path="/posts/edit" exact component={PostEdit} />
                    <Route path="/posts/delete" exact component={PostDelete} />
                    <Route path="/posts/show" exact component={PostShow} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;
