import React from "react";
import AllPostContainer from '../Containers/AllPostContainer'
import PostContainer from '../Containers/PostContainer'
import EditContainer from '../Containers/EditContainer'
import ViewPostContainer from '../Containers/ViewPostContainer'

class AppComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    newPostClicked = ( ) =>{
        this.props.newPostClicked()
    }

    render() {
        //document.getElementById("post-list").style.overflowY = "scroll"
        document.body.style.overflowY = "scroll"
        return (
            <div id= "appPreview">
                <header className="headerBlog">
                    <div id="logoBlog">
                        <span className="iconBlog"> comment </span>
                        <span> Blog<b>Post</b> </span>
                    </div>
                </header>
                {
                    this.props.previewFileClicked?
                        <div className="preview">
                            <PostContainer/>
                        </div>
                        :
                        <div></div>
                }
                {
                    this.props.editFileClicked?
                        <div className="preview">
                            <EditContainer post={this.props.post}/>
                        </div>
                        :
                        <div></div>
                }
                {
                    this.props.viewPostClicked?
                        <div className="preview">
                            <ViewPostContainer post={this.props.post}/>
                        </div>
                        :
                        <div></div>
                }
                <div id="navi">
                    <AllPostContainer/>
                </div>
                <i className="plusButtonBottomRight fas fa-plus fa-3x" onClick={this.newPostClicked}></i>
            </div>
        )
    }
}

export default AppComponent;
