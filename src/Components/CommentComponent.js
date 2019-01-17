import React, { Component } from 'react';

class CommentComponent extends Component {

    handleComment = (e) => {
        e.preventDefault();
        const requestBody = {
            Commento: this.getMessage.value,
        }
        this.props.handleComment(requestBody)
        this.getMessage.value = '';
    }

    render() {
        console.log(this.props)
        return (
                <form className="form" onSubmit={this.handleComment}>
                    <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Comment</button>
                </form>
        );
    }
}
export default CommentComponent
