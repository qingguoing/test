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