import React from 'react';

class PostComponent extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        const requestBody = {
            Name: this.getTitle.value,
            Surname: this.getMessage.value
        }
        this.props.handleSubmit(requestBody)
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (
            <div>
                <div className="navbarplugin">
                    <h2 className="center ">Post It</h2>
                </div>
                <div className="post-container">
                    <h1 className="post_heading">Create Post</h1>
                    <form className="form" onSubmit={this.handleSubmit} >
                        <input required type="text" ref={(input) => this.getTitle = input}
                               placeholder="Enter Post Title" /><br /><br />
                        <textarea required rows="5" ref={(input) => this.getMessage = input}
                                  cols="28" placeholder="Enter Post" /><br /><br />
                        <button className='button_plugin'>Post</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default PostComponent;
