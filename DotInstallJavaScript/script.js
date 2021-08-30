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
}

const yuta = new Post('hkkb 実験中');
yuta.show();
yuta.like();
yuta.like();
yuta.like();
yuta.like();
