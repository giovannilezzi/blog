import React from 'react';

class PostComponent extends React.Component{

    /*componentDidMount() {
        document.getElementById("opacitaAddBlog").style.marginTop = document.getElementById("post-list").scrollTop + "px";
        //document.getElementsByClassName("myOpacityCalendar")[0].style.height = Math.max( document.body.scrollHeight) + "px"
        document.getElementById("post-list").style.overflowY = "hidden"
        document.getElementsByClassName("myOpacityBlogAdd")[0].style.marginTop = document.getElementById("post-list").scrollTop + "px"
    }*/

    handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {
            Titolo: this.getTitle.value,
            Corpo: this.getMessage.value
        }
        this.props.handleSubmit(requestBody)
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (
                <div className="post-container myPost">
                    <div className="myOpacityBlogAdd"></div>
                    <div id="opacitaAddBlog" className="myFormBlog">
                        <h1 className="post_heading">Create Post</h1>
                        <form className="form" onSubmit={this.handleSubmit} >
                            <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
                            <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28" placeholder="Enter Post" /><br /><br />
                            <button className='button_plugin'>Post</button>
                        </form>
                    </div>
                </div>
        )
    }
}

export default PostComponent;
