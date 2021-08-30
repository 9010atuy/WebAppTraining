'use strict';

const posts = [
  {
    text: 'JavaScript勉強中',
    likeCount: 0,
    show() {
      console.log(`${this.text} ${this.likeCount} like!!`);
    },
  },
  {
    text: 'プログラミングはやりだすと止まらない！',
    likeCount: 0,
    show() {
      console.log(`${this.text} ${this.likeCount} like!!`);
    },
  },
];

const showPost = post => {
  console.log(`${post.text} ${post.likeCount} like!!`);
};

posts.forEach(post => {
  post.show();
});
