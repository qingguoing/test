// 855: https://leetcode.com/problems/exam-room/

/**
 * solution1: 624ms, 45.8MB
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
  if (len == 0) {
    this._seat(0);
    return 0;
  }
  let preSeatNum = 0;
  let gap = 0;
  for (let i = 1; i < len; ++i) {
    const pre = seatArr[i - 1];
    const next = seatArr[i];
    const curGap = Math.floor((next - pre)/2);
    if (curGap <= gap) {
      if (!gap) gap = curGap;
      continue;
    }
    preSeatNum = pre;
    gap = curGap;
  }
  const first = seatArr[0];
  const last = seatArr[len - 1];
  let seatNum = parseInt(preSeatNum) + gap;
  if (first != 0 && first >= gap) {
    seatNum = 0;
    gap = first;
  }
  if (last != this.n - 1 && (this.n - 1 - last > gap)) {
    seatNum = this.n - 1;
  }
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