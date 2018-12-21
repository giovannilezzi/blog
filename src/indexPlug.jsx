import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore';
import PostContainer from './Containers/PostContainer'
import $ from 'jquery'
import './Css/blog.css';

// Courtesy of https://feathericons.com/
const Icon = () => <i className='icon fa fa-plug'/>;

class HelloWorldPlugin {
    initialize(registry)
    {
        registry.registerMainMenuAction (
            "Blog",
            () => {
                $('#post-list').css("overflow-y", "scroll");
                $('#create_post').css("display", "none")
                //$('#post-list').css("margin-top", "25px")
                $('#post-list').css("background", "#f4f4ef")

                ReactDOM.render(
                    <Provider store={store}>
                        <div>
                            <PostContainer/>
                        </div>
                    </Provider>,
                    document.getElementById('post-list')
                );
            },
            <Icon />,
        );
    }
}

window.registerPlugin('com.mattermost.webapp-blog', new HelloWorldPlugin());
