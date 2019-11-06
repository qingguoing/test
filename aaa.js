// [1, '+', 2, '*', '(', 3, '+', 4, ')']
// ( ( ) )
function myEval(arr) {
  const leftParentheseIndex = arr.indexOf('(');
  if (leftParentheseIndex > -1) {
    // handle parenthese first
    const rightParentheseIndex = arr.lastIndexOf(')');
    arr.splice(leftParentheseIndex, rightParentheseIndex - leftParentheseIndex + 2, myEval(arr.slice(leftParentheseIndex + 1, rightParentheseIndex)));
  }
  if (arr.indexOf('*') > -1 || arr.indexOf('/') > -1) {
    // handle multiply || divide
    const tempArr = [];
    for (let i = 0; i < arr.length;) {
      if (arr[i] === '*' || arr[i] === '/') {
        const left = tempArr.pop();
        tempArr.push(getResult([left, arr[i], arr[++i]]));
      } else {
        tempArr.push(arr[i]);
      }
      i++;
    }
    arr = tempArr;
  }
  return getResult(arr);
}

function getResult(arr) {
  // console.log(arr);
  if (arr.length === 3) {
    switch (arr[1]) {
      case '+': 
        return arr[0] + arr[2];
      case '-': 
        return arr[0] - arr[2];
      case '*':
        return arr[0] * arr[2];
    }
  }
  arr.splice(0, 3, getResult(arr.slice(0, 3)));
  return getResult(arr.slice());
}

// console.log(getResult([1, '+', 2, '-', 3, '+', 4]));

console.log(myEval([1, '+', 2, '*', '(', 3, '+', 4, ')']));

// node = {
//   left: null,
//   operator: null,
//   right: null,
//   priority: 10,
// };

// const result = 1 + 2 * 3 + 4 / 2;

//       *
//      / \
//     2   3
//    /     \
//   +       +
//  /         \
// 1           4
//              \
//               /
//                \
//                 2