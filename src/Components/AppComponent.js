import React from "react";
import AllPostContainer from '../Containers/AllPostContainer'
import PostContainer from '../Containers/PostContainer'

class AppComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id= "appPreview">
                <div className="preview">
                    <PostContainer/>
                </div>
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



