'use strict';

const posts = [
  {
    text: 'JavaScript勉強中',
    likeCount: 0,
  },
  {
    text: 'プログラミングはやりだすと止まらない！',
    likeCount: 0,
  },
];

const showPost = post => {
  console.log(`${post.text} ${post.likeCount} like!!`);
};

posts.forEach(post => {
  showPost(post);
});
