import React from 'react';

class PostComponent extends React.Component{

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
                    <div className="myOpacity"></div>
                    <div className="myFormBlog">
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
