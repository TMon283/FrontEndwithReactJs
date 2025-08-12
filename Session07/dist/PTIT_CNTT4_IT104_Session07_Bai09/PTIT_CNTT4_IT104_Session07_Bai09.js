let userIdCounter = 1;
let postIdCounter = 1;
let commentIdCounter = 1;
class CComment {
    constructor(userId, content) {
        this.replies = [];
        this.id = commentIdCounter++;
        this.userId = userId;
        this.content = content;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    constructor(userId, content) {
        this.likes = [];
        this.comments = [];
        this.id = postIdCounter++;
        this.userId = userId;
        this.content = content;
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    constructor() {
        this.posts = [];
        this.followers = [];
        this.id = userIdCounter++;
    }
    createPost(content) {
        const post = new Post(this.id, content);
        this.posts.push(post);
        return post;
    }
    comment(postId, commentContent) {
        const post = this.findPostById(postId);
        if (post) {
            const comment = new CComment(this.id, commentContent);
            post.addComment(comment);
        }
    }
    follow(user) {
        if (!user.followers.includes(this)) {
            user.followers.push(this);
        }
    }
    likePost(postId) {
        const post = this.findPostById(postId);
        if (post) {
            post.addLike(this.id);
        }
    }
    viewFeed() {
        const feed = [];
        for (const user of this.followers) {
            feed.push(...user.posts);
        }
        return feed;
    }
    findPostById(postId) {
        for (const user of this.followers) {
            const post = user.posts.find(p => p.id === postId);
            if (post)
                return post;
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
