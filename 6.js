/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // loop for pattern - based on rows
    // sequence = 0
    // if condition
    // add - plus
    // sub - minus
  
    // if add ++
    // if sub --
  
  // convert pattern to answer

  let sequence = 0
  let arr = []
  let obj = {}
  let answer = '';
  let add = false;
  let sub = false;

  for (let i = 0; i < s.length; i++) {
    if (sequence === 0) {
      add = true
      sub = false
    }

    if (sequence === numRows - 1) {
      add = false
      sub = true
    }

    if (add) {
      arr.push(sequence)

      if (obj[sequence]) {
        obj[sequence] += s[i]
      } else {
        obj[sequence] = s[i]
      }

      sequence++;
    }

    if (sub) {
      arr.push(sequence)

      if (obj[sequence]) {
        obj[sequence] += s[i]
      } else {
        obj[sequence] = s[i]
      }

      sequence--;
    }
  }

  let objKeys = Object.keys(obj).map(item => parseInt(item));

  if (numRows === 1) {
    objKeys.map(k => {
    answer += obj[k];
  })
  } else {
    objKeys.sort(function(a, b) {
    return a - b;
  }).map(k => {
    answer += obj[k];
  })
  }

  return answer;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));

console.log(convert("AB", 1));