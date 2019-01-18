import React, { Component } from 'react';

class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        console.log(this.props)
        const requestBody = {
            Id: (this.props.post.Id),
            Titolo: this.getTitle.value,
            Corpo: this.getMessage.value
        }
        console.log(requestBody)
        this.props.handleEdit(requestBody)
        this.getTitle.value = '';
        this.getMessage.value = '';
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
