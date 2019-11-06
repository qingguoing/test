function removeDuplication(str, k) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    checkArr(res, str[i], k);
  }
  
  return res.join('');
}

function checkArr(arr, str, k) {
  if (arr.length < k - 1) {
    arr.push(str);
    return;
  }
  let index = arr.length - 1;
  while (k > 1) {
    if (arr[index] !== str) {
      arr.push(str);
      return;
    }
    index--;
    k--;
  }
  arr.length = index + 1;
  return;
}

console.log(removeDuplication('azbbbzbbeeebza', 3))

// 过程式思考链路，缺乏深入的思考和总结
function removeDuplicateProcess(res, k, str) {
  if (res.length < k) return false;
  let index = res.length - 1;
  for (; k > 0; index--) {
    if (res[index] === str) {
      k--;
    } else {
      return false;
    }
  }
  if (k === 0) {
    res.length = index + 1;
    return true;
  }
  return false;
}

function deleteWordProcess(str, k) {
  let res = [];
  for (let i = 0; i < str.length;) {
    // console.log(res.slice(0));
    if (str[i] !== str[i + 1]) {
      if (!removeDuplicateProcess(res, 2, str[i])) {
        res.push(str[i]);
      };
      i++;
    } else {
      let j = 2;
      while(j < k) {
        if (str[i + j] !== str[i]) {
          break;
        }
        j++;
      }
      if (k === j) {
        i += k;
      } else {
        if (!removeDuplicateProcess(res, k - j, str[i])) {
          res = res.concat(str.slice(i, i + j).split(''));
        }
        i += j;
      }
    }
  }
  return res.join('');
}

console.log(deleteWordProcess('azbbbzbbeeebza', 3));
