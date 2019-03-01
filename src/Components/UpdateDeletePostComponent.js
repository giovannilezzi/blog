import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";
import EditContainer from '../Containers/EditContainer'
import $ from 'jquery'
import CommentContainer from '../Containers/CommentContainer'

class UpdateDeletePostComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked : false
        }
    }

    editPostClicked = () => {
        this.props.editPostClicked(this.props.post)
    }

    deletePost = () => {
        const requestBody = {
            Id: this.props.post.Id,
        }
        this.props.deletePost(requestBody)
    }

    like = () => {
        if(!$("#myHeart").hasClass("myHeartRed")){
            $("#myHeart").addClass("myHeartRed")
        }else $("#myHeart").removeClass("myHeartRed")
        // chimata al DB
    }

    addComment = () => {
        if(!this.state.clicked){
            this.setState({clicked : true})
        }else this.setState({clicked : false})
    }

    viewPost = () => {
        this.props.viewPost(this.props.post)
    }

    render() {
        return (
            <a id="Prova" className="tileBlog">
                <h2 className="tile-descriptionBlog" onClick={this.viewPost}> <span className="TitoloBlog">{this.props.post.Titolo} </span> </h2>
                <div className="plus">
                <i id="myHeart" className="far fa-heart" onClick={this.like}></i>
                <i className="fas fa-comments" onClick={this.addComment}></i>
                </div>
                <div className="tile-dividerBlog"></div>
                {
                    this.state.clicked?
                        <CommentContainer postId={this.props.post.Id}/>
                        :
                        <div></div>
                }
                <div id="Comment" className="underFile">
                    <img src="https://png.icons8.com/color/edit" onClick={this.editPostClicked}/>
                    <img className="imageDelete" src="https://png.icons8.com/color/delete" onClick={this.deletePost} />
                </div>
            </a>
        );
    }
}
export default UpdateDeletePostComponent;
