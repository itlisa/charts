function Tree() {
  this.x = 0;
  this.y = 0;
  this.xpos = 0;
  this.ypos = 0;
  this.zpos = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = '#fff';
  this.alpha = 1;
  this.lineWidth = 1;
  // generate some random branch positions
  this.branch = [];
  this.branch[0] = -140 - Math.random() * 20; // 0~-120
  this.branch[1] = -30 - Math.random() * 30;//0~-30
  this.branch[2] = Math.random() * 80 - 40;//-40~40
  this.branch[3] = -100 - Math.random() * 40; //-100~-140
  this.branch[4] = -60 - Math.random() * 40; // -60~-100
  this.branch[5] = Math.random() * 60 - 30; //-30~-30
  this.branch[6] = -110 - Math.random() * 20; // -110~--130
};
Tree.prototype.draw = function (ctx) {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.lineWidth = this.lineWidth;
  ctx.scale(this.scaleX, this.scaleY);
  ctx.strokeStyle = 'orange';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, this.branch[0]);
  ctx.moveTo(0, this.branch[1]);
  ctx.lineTo(this.branch[2], this.branch[3]);
  ctx.moveTo(0, this.branch[4]);
  ctx.lineTo(this.branch[5], this.branch[6]);
  ctx.stroke();
  ctx.restore();
};
export default Tree;