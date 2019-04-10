function Ball(r, color) {
  // 设置初始值
  this.r = r || 10;
  this.color = color ? color : "#fff";
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.vz = 0;
  this.xpos = 0;
  this.ypos = 0;
  this.zpos = 0;
  this.lineWidth = 1;
  this.rotation = 0;
  this.mass = 1;
  this.visible = false;
  this.scaleX = 1;
  this.scaleY = 1;
}

Ball.prototype.draw = function (ctx) {
  ctx.save();
  ctx.fillStyle = this.color;
  ctx.rotate(this.rotation);
  ctx.scale(this.scaleX, this.scaleY);
  ctx.translate(this.x, this.y);
  ctx.lineWidth = this.lineWidth;
  ctx.beginPath();
  ctx.arc(0, 0, this.r, 0, Math.PI * 2, false);
  ctx.fill();
  if(!this.lineWidth){
    ctx.stroke();
  }
  ctx.restore();
};
export default Ball;