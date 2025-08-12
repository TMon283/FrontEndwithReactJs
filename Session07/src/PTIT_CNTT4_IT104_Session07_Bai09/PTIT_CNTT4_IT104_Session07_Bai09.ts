let userIdCounter = 1;
let postIdCounter = 1;
let commentIdCounter = 1;

class CComment {
  id: number;
  userId: number;
  content: string;
  replies: CComment[] = [];

  constructor(userId: number, content: string) {
    this.id = commentIdCounter++;
    this.userId = userId;
    this.content = content;
  }

  addReply(reply: CComment) {
    this.replies.push(reply);
  }
}

class Post {
  id: number;
  userId: number;
  content: string;
  likes: number[] = [];
  comments: CComment[] = [];

  constructor(userId: number, content: string) {
    this.id = postIdCounter++;
    this.userId = userId;
    this.content = content;
  }

  addLike(userId: number) {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
    }
  }

  addComment(comment: CComment) {
    this.comments.push(comment);
  }
}

class User {
  id: number;
  posts: Post[] = [];
  followers: User[] = [];

  constructor() {
    this.id = userIdCounter++;
  }

  createPost(content: string): Post {
    const post = new Post(this.id, content);
    this.posts.push(post);
    return post;
  }

  comment(postId: number, commentContent: string) {
    const post = this.findPostById(postId);
    if (post) {
      const comment = new CComment(this.id, commentContent);
      post.addComment(comment);
    }
  }

  follow(user: User) {
    if (!user.followers.includes(this)) {
      user.followers.push(this);
    }
  }

  likePost(postId: number) {
    const post = this.findPostById(postId);
    if (post) {
      post.addLike(this.id);
    }
  }

  viewFeed(): Post[] {
    const feed: Post[] = [];
    for (const user of this.followers) {
      feed.push(...user.posts);
    }
    return feed;
  }

  private findPostById(postId: number): Post | undefined {
    for (const user of this.followers) {
      const post = user.posts.find(p => p.id === postId);
      if (post) return post;
    }
    return undefined;
  }
}

const minh = new User();
const tuan = new User();

tuan.follow(minh);

const post1 = minh.createPost("Hello world!");
tuan.likePost(post1.id);
tuan.comment(post1.id, "Nice post!");

console.log(tuan.viewFeed());
