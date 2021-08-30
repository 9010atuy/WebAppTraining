'use strict';

class Post {
  constructor(text) {
    this.text = text;
    this.likeCount = 0;
  }

  show() {
    console.log(`${this.text}    ${this.likeCount} like!!`);
  }
}

const yuta = new Post('hkkb 実験中');
yuta.show();
