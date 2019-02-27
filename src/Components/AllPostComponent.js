import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import UpdateDeletePostContainer from "../Containers/UpdateDeletePostContainer";
import store from "../Store/AppStore";
import PostContainer from '../Containers/PostContainer'

class AllPostComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    createPost = ( ) =>{
        this.props.newPostClicked()
    }

    render() {
        if (this.props.allPostLoaded) {
            this.props.asyncCallGetAllPosts()
        }
        let listItems = ""
        if (this.props.posts && !this.props.isLoading) {
            listItems =
                this.props.posts.map((post) =>
                    <div key={post.Id}>
                        <UpdateDeletePostContainer post={post} key={post.Id}/>
                    </div>
                )
        }
        else
            listItems = <h3 className="loading-indicator">Loading ...</h3>

        return (
            <div className= "firstDivBlog">
                <a className="btn-toolsetBlog " onClick={this.createPost}>
                    <strong>Add Blog</strong>
                </a>
                <div className="tiles-flex">
                    {listItems}
                </div>
            </div>
        )
    }
}

export default AllPostComponent
