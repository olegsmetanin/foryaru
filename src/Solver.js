export default class Solver {

  static findPairsForSum(arr, expectedSum) {

    arr.sort((a, b) => a - b);
    var sum,
      res = [],
      left = 0,
      right = arr.length - 1;
    while (left < right) {
      sum = arr[left] + arr[right];
      if (sum === expectedSum) {
        res.push([arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < expectedSum) {
        left++;
      } else if (sum > expectedSum) {
        right--;
      }

    }
    return res;
  }

}
