import React from 'react';
import ReactDOM from 'react-dom';
import './Css/blog.css';
import { Provider } from 'react-redux';
import store from './Store/AppStore'
import PostContainer from './Containers/PostContainer'
import MenuComponent from "./Components/MenuComponent";
import AllPostContainer from './Containers/AllPostContainer'
import $ from 'jquery'

var link = $('<link/>', {
    rel: 'stylesheet',
    type:'text/css',
    href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
    integrity: 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
    crossorigin: 'anonymous'
})
$('head').prepend(link);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <MenuComponent/>
        </div>

        <div id="page">
            <PostContainer/>
        </div>
    </Provider>,
    document.getElementById('root')
)
