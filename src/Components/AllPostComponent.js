import React from 'react';
import UpdateDeletePostContainer from "../Containers/UpdateDeletePostContainer";

class AllPostComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallGetAllPosts()
    }

    render() {
        let listItems = ""
        if (this.props.posts && !this.props.isLoading) {
            listItems =
                this.props.posts.map((post) =>
                    <div key={post.Id}>
                        <UpdateDeletePostContainer post={post} key={post.Id}/>
                    </div>
                )
        }
        else
            listItems = <h3 className="loading-indicator">Loading ...</h3>

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default AllPostComponent
