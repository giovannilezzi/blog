import React from 'react';
import ReactDOM from 'react-dom';
import './Css/blog.css';
import { Provider } from 'react-redux';
import store from './Store/AppStore'
import PostContainer from './Containers/PostContainer'

ReactDOM.render(
    <Provider store={store}>
        <PostContainer />
    </Provider>,
    document.getElementById('root')
)
