import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post/Post";
import EditComponent from "./EditComponent/EditComponent";
class AllPost extends Component {

    render() {
        return (
            <div>
                <h1 className="post_heading">All Posts</h1>
                {this.props.posts.map(post => {
                    return post.editing ? (
                        <EditComponent post={post} key={post.id} />
                    ) : (
                        <Post key={post.id} post={post} />
                    );
                })}
            </div>
        );
    }
}

const mapStateToprops = state => {
    return {
        posts: state
    };
};

export default connect(mapStateToprops)(AllPost);
