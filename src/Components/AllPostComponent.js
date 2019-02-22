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

    componentWillMount() {
        this.props.asyncCallGetAllPosts()
    }

    createPost = ( ) =>{
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
            <div className="tiles-flex">
                {listItems}
                <i className="fas fa-plus fa-3x" onClick={this.createPost}></i>
            </div>
        )
    }
}

export default AllPostComponent
