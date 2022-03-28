let num = [8, 1, 1];
let k = 274;

var addToArrayForm = function (num, k) {
  let len = num.length;
  let cur = k;
  let arr = [];

  let i = len;
  while (--i >= 0) {
    if (i > 0) {
      cur += num[i];
      arr.push(cur % 10);
      cur = parseInt(cur / 10);
    } else if (i == 0) {
      cur += num[i];
      if (cur > 9 && cur < 20) {
        // 第一位和是10的时候加1
        arr.push(cur % 10);
        arr.push(1);
      } else {
        while (cur > 0) {
          arr.push(cur % 10);
          cur = parseInt(cur / 10);
        }
      }
    }
  }

  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[arr.length - i - 1] = arr[i];
  }
  // console.log(newArr);
  return newArr;
};

addToArrayForm(num, k);
