/**
 * 回溯法：
 * 1. 确定是否需要对数组参数进行排序
 * 2. 确定 push 进结果集的条件，push 进结果集需要 copy 副本，因为 push 与 pop 是对应的
 * 3. 是否可重复使用当前元素 ? i : i++
 * 4. 确定遍历的开始索引
 */


/**
 * 不重复
 * 78: https://leetcode.com/problems/subsets/description
 * @param {*} arr 
 */
function run1(arr) {
  const res = [];
  backtrack1(res, arr, [], 0);
  console.log('1', res);
  return res;
}

function backtrack1(res, arr, tempList, start) {
  // 此处需要 copy 副本出来，
  res.push([...tempList]);
  for (let i = start; i < arr.length; i++) {
    tempList.push(arr[i]);
    backtrack1(res, arr, tempList, i + 1);
    tempList.pop();
  }
}

run1([1, 2, 3]);

/**
 * 可重复
 * 90: https://leetcode.com/problems/subsets-ii/description
 * @param {*} arr 
 */
function run2(arr) {
  const res = [];
  backtrack2(res, arr.sort((a, b) => a - b), [], 0);
  console.log('2', res);
  return res;
}

function backtrack2(res, arr, tempList, start) {
  // 此处需要 copy 副本出来，
  res.push([...tempList]);
  for (let i = start; i < arr.length; i++) {
    if (i > start && arr[i] === arr[i-1]) continue;
    tempList.push(arr[i]);
    backtrack2(res, arr, tempList, i + 1);
    tempList.pop();
  }
}

run2([2, 1, 2]);

/**
 * 所有排列组合
 * 46: https://leetcode.com/problems/permutations/description
 * @param {*} arr 
 */
function run3(arr) {
  const res = [];
  backtrack3(res, arr, []);
  console.log('3', res);
  return res;
}

function backtrack3(res, arr, tempList) {
  // 此处需要 copy 副本出来
  if (arr.length === 0) {
    return res.push([...tempList]);
  }
  for (let i = 0; i < arr.length; i++) {
    tempList.push(arr[i]);
    backtrack3(res, arr.slice(0, i).concat(arr.slice(i + 1)), tempList);
    tempList.pop();
  }
}

run3(['a', 'b', 'c']);

/**
 * 可重复，所有排列组合
 * 47: https://leetcode.com/problems/permutations-ii/description
 * @param {*} arr 
 */
function run4(arr) {
  const res = [];
  backtrack4(res, arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)), []);
  console.log('4', res);
  return res;
}

function backtrack4(res, arr, tempList) {
  // 此处需要 copy 副本出来
  if (arr.length === 0) {
    return res.push([...tempList]);
  }
  let preValue = null;
  for (let i = 0; i < arr.length; i++) {
    if (preValue === arr[i]) continue;
    tempList.push(arr[i]);
    backtrack4(res, arr.slice(0, i).concat(arr.slice(i + 1)), tempList);
    preValue = tempList.pop();
  }
}

run4(['a', 'b', 'a']);

/**
 * 不重复，但是元素可无限取
 * 39: https://leetcode.com/problems/combination-sum/description
 * @param {*} arr 
 */
function run5(arr, target) {
  const res = [];
  backtrack5(res, arr.sort((a, b) => a - b), [], target, 0);
  console.log('5', res);
  return res;
}

function backtrack5(res, arr, tempList, target, start) {
  // 此处需要 copy 副本出来
  if (target < 0) return;
  if (target === 0) {
    return res.push([...tempList]);
  }
  for (let i = start; i < arr.length; i++) {
    tempList.push(arr[i]);
    backtrack5(res, arr, tempList, target - arr[i], i);
    tempList.pop();
  }
}

run5([2, 3, 6, 7], 7);

/**
 * 重复，元素只能取一次
 * 40: https://leetcode.com/problems/combination-sum/description
 * @param {*} arr 
 */
function run6(arr, target) {
  const res = [];
  backtrack6(res, arr.sort((a, b) => a - b), [], target, 0);
  console.log('6', res);
  return res;
}

function backtrack6(res, arr, tempList, target, start) {
  // 此处需要 copy 副本出来
  if (target < 0) return;
  if (target === 0) {
    return res.push([...tempList]);
  }
  let preValue = null;
  for (let i = start; i < arr.length; i++) {
    if (preValue === arr[i]) continue;
    tempList.push(arr[i]);
    backtrack6(res, arr, tempList, target - arr[i], i + 1);
    preValue = tempList.pop();
  }
}

run6([10,1,2,7,6,1,5], 8);

/**
 * 不重复
 * 131: https://leetcode.com/problems/palindrome-partitioning/description
 * @param {*} str
 */
function run7(str) {
  const res = [];
  backtrack7(res, str, [], 0);
  console.log('7', res);
  return res;
}

function backtrack7(res, str, tempList, start) {
  // 此处需要 copy 副本出来
  if (tempList.join('').length === str.length) {
    return res.push([...tempList]);
  }
  for (let i = start; i < str.length; i++) {
    const tempStr = str.slice(start, i + 1);
    if (isPalindrome(tempStr)) {
      tempList.push(tempStr);
    } else {
      continue;
    }
    backtrack7(res, str, tempList, i + 1);
    tempList.pop();
  }
}

function isPalindrome(str) {
  // str = str.split('').reverse().join('')
  let right = str.length - 1;
  let left = 0;
  while (right > left && str[left] === str[right]) {
    right--;
    left++;
  }
  return left >= right;
}

/**
 * aab
 * ['aa', 'b']
 * ['a', 'a', 'b']
 */
run7('aab');

