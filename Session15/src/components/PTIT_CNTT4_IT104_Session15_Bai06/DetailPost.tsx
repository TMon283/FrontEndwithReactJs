import React, { Component } from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type Props = {
  posts: Post[];
};

export default class DetailPost extends Component<Props> {
  render() {
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {this.props.posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <p><b>Id:</b> {post.id}</p>
            <p><b>Title:</b> {post.title}</p>
            <p><b>Content:</b> {post.content}</p>
            <p><b>Author:</b> {post.author}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
