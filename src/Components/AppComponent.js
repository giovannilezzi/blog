import React from "react";
import AllPostContainer from '../Containers/AllPostContainer'
import PostContainer from '../Containers/PostContainer'
import EditContainer from '../Containers/EditContainer'

class AppComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
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
                <div id="navi">
                    <AllPostContainer/>
                </div>
            </div>
        )
    }
}

export default AppComponent;
