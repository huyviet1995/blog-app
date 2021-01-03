import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {

  state = {
    loadedPost: null,
  };

  loadData = () => {
    if (this.props.match.params.id)
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
          .then((response) => {
            this.setState({ loadedPost: response.data });
          });
      }
  }

  componentDidMount () {
    this.loadData()
  }

  componentDidUpdate () {
    this.loadData()
  }

  deletePostHandler = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    const { loadedPost } = this.state;
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (loadedPost) {
      console.log(this.state.loadedPost);
      post = (
        <div className="FullPost">
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.content}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
