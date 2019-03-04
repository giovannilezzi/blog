import React, { Component } from 'react';

class EditComponent extends Component {

    /*componentDidMount() {
        document.getElementById("opacitaEditBlog").style.marginTop = document.getElementById("post-list").scrollTop + "px";
        //document.getElementsByClassName("myOpacityCalendar")[0].style.height = Math.max( document.body.scrollHeight) + "px"
        document.getElementById("post-list").style.overflowY = "hidden"
        document.getElementsByClassName("myOpacityBlogAdd")[0].style.marginTop = document.getElementById("post-list").scrollTop + "px"
    }*/

    closeViewPost = () => {
        this.props.closeViewPost()
    }

    render() {
        return (
            <div className="post-container myPost">
                <div className="myOpacityBlogAdd"></div>
                <div id="opacitaEditBlog" className="myFormViewPost ">
                    <h1 className="post_heading">{this.props.post.Titolo}</h1>
                    <br></br>
                    <br></br>
                    <label className="CorpoPost">{this.props.post.Corpo}</label>
                    <br></br>
                    <br></br>
                    <button className="  button3" onClick={this.closeViewPost}>
                        <span>Close</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default EditComponent
