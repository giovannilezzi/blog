import React, { Component } from 'react';

class EditComponent extends Component {

    handleEdit = () => {
        this.props.handleEdit(this.props.post)
    }

    render() {
        return (
            <div key={this.props.post.Id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.post.Titolo} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                              defaultValue={this.props.post.Corpo} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default EditComponent
