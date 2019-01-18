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

    updatePost = () => {
        ReactDOM.render(
            <Provider store={store}>
                <EditContainer post = {this.props.post} />
            </Provider>,
            document.getElementById('page')
        )
    }

    deletePost = () => {
        $( "#Prova" ).remove();
        console.log()
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

    render() {
        return (

            <div id="Prova" className="post">
                <h2 className="post_title">{this.props.post.Titolo}</h2>
                <p className="post_message">{this.props.post.Corpo}</p>
                <i id="myHeart" className="far fa-heart" onClick={this.like}></i>
                <i className="fas fa-comments" onClick={this.addComment}></i>
                {
                    this.state.clicked?

                        <CommentContainer/>

                        :

                        <div></div>
                }
                <div id="Comment" className="control-buttons">
                    <button className="edit" onClick={this.updatePost}>Edit</button>
                    <button className="delete" onClick={this.deletePost}>Delete</button>
                </div>
            </div>

        );
    }
}
export default UpdateDeletePostComponent;
