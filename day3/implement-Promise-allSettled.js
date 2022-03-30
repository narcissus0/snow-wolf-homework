/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  // your code here
  if (promises.length == 0) {
    return Promise.resolve([]);
  }
  let results = [];

  let count = 0;
  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = {
            status: "fulfilled",
            value: result,
          };
        })
        .catch((error) => {
          results[index] = {
            status: "rejected",
            reason: error,
          };
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        });
    });
  });
}
