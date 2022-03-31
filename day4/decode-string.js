/**
 * @param {string} s
 * @return {string}
 */
s = "3[a]2[bc]";
("aaabcbc");

var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let substr = "";
      while (stack[stack.length - 1] !== "[") {
        // go up until '['
        substr = stack.pop() + substr;
      }
      stack.pop(); // remove '['

      let k = "";
      while (stack && !isNaN(stack[stack.length - 1])) {
        // check if it's a number
        k = stack.pop() + k;
      }
      stack.push(substr.repeat(parseInt(k))); // repeat the string as many times as k
    }
  }
  return stack.join("");
};
