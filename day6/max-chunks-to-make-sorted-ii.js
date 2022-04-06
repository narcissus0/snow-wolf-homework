/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const sorted = [...arr];
  sorted.sort((a, b) => a - b);

  let count = 0,
    sum1 = 0,
    sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    sum2 += sorted[i];

    if (sum1 === sum2) {
      count++;
    }
  }

  return count;
};
