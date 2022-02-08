// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let aArr = 0;
  let bArr = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aArr++;
    if (a[i] < b[i]) bArr++;
  }
  return [aArr, bArr];
}
