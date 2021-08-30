'use strict';

class Post {
  constructor(text) {
    this.text = text;
    this.likeCount = 0;
  }

  show() {
    console.log(`${this.text}    ${this.likeCount} like!!`);
  }

  like() {
    this.likeCount++;
    console.log('you get like!!');
    this.show();
  }

  static classInfo() {
    console.log('show class version');
  }
}

class SponsoredPost extends Post {
  constructor(text, sponsored) {
    super(text);
    this.sponsored = sponsored;
  }
  show() {
    console.log(
      `${this.text}    ${this.likeCount} like!!    spoonsered by ${this.sponsored}`
    );
  }
}

const posts = [
  new Post('nice to meet you!'),
  new Post('my name is yuta'),
  new Post("I'm 29 old"),
  new SponsoredPost('favarite GoldenKamui', 'Young Jamp'),
];

posts.forEach(post => {
  post.show();
  post.like();
});
