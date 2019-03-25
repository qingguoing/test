/**
 * https://leetcode.com/problems/exam-room/
 * @param {number} N
 */
var ExamRoom = function(N) {
  this.n = N;
  this.seatMap = {};
};

/**
* @return {number}
*/
ExamRoom.prototype.seat = function() {
  const seatArr = Object.keys(this.seatMap).sort((a, b) => a - b);
  const len = seatArr.length;
  if (len < 2) {
    const seatNum = len ? this.n - 1: 0;
    this._seat(seatNum);
    return seatNum;
  }
  let preSeatNum = 0;
  let gap = 0;
  for (let i = 1; i < len; ++i) {
    const pre = seatArr[i - 1];
    const next = seatArr[i];
    const curGap = next - pre;
    if (curGap <= gap) {
      if (!gap) gap = curGap;
      continue;
    }
    preSeatNum = pre;
    gap = curGap;
  }
  const seatNum = parseInt(preSeatNum) + Math.floor(gap / 2);
  this._seat(seatNum);
  return seatNum;
};

ExamRoom.prototype._seat = function(p) {
  this.seatMap[p] = true;
}

/** 
* @param {number} p
* @return {void}
*/
ExamRoom.prototype.leave = function(p) {
  delete this.seatMap[p];
};

/** 
* Your ExamRoom object will be instantiated and called as such:
* var obj = Object.create(ExamRoom).createNew(N)
* var param_1 = obj.seat()
* obj.leave(p)
*/