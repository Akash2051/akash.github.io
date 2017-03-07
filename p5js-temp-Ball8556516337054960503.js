function Ball(x,y) {
this.x=x;
this.y=y;
this.col=random(255);
this.show= function() {
  fill(random(255),random(255),random(255));
   ellipse(this.x, this.y, 3, 3);

  }
}