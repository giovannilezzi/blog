import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import React from "react";
import $ from 'jquery'
import PostContainer from '../Containers/PostContainer'
import AllPostContainer from '../Containers/AllPostContainer'

class MenuComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    allPosts = ( ) =>{
        if ($("#upload").attr('class') != 'active'){
            $("#library").removeClass("active");
            $("#upload").addClass("active");
        }
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <AllPostContainer/>
                </div>
            </Provider>,
            document.getElementById('page'),
        );
    }


    createPost = ( ) =>{
        if ($("#library").attr('class') != 'active'){
            $("#upload").removeClass("active");
            $("#library").addClass("active");
        }
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <PostContainer/>
                </div>
            </Provider>,
            document.getElementById('root'),
        );
    }

    render() {
        return (
            <ul className="topnav">
                <li><a id='upload' className="active" href="#upload" onClick={this.allPosts}>AllPosts</a></li>
                <li><a id='library' href="#library" onClick={this.createPost}>CreatePost</a></li>
            </ul>
        )
    }
}

export default MenuComponent;
