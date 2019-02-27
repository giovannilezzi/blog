import React, { Component } from 'react';

class EditComponent extends Component {

    componentDidMount() {
        document.getElementById("opacita").style.marginTop = window.pageYOffset.toString() + "px";
    }

    handleEditFile = (e) => {
        e.preventDefault();
        const requestBody = {
            Id: (this.props.post.Id),
            Titolo: this.getTitle.value,
            Corpo: this.getMessage.value
        }
        this.props.handleEdit(requestBody)
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    closeEditFile = () => {
        this.props.closeEditFile()
    }

    render() {
        return (
            <div className="myPost">
            <div id="opacita" className="myOpacity"></div>
                <div className="myFormEditBlog ">
                    <input className="insertEdit" required type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.post.Titolo} placeholder="Enter new File Name" /><br /><br />
                    <input className="insertEdit" required type="text" ref={(input) => this.getMessage = input}
                           defaultValue={this.props.post.Corpo} placeholder="Enter Post Title" /><br /><br />

                    <button className="  button2" onClick={this.handleEditFile} >
                        <span >Save Edit </span>
                    </button>
                    <button className="  button3" onClick={this.closeEditFile}>
                        <span>Close</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default EditComponent
