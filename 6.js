function convert(s, numRows) {
  let sequence = 1;
  let arr = [];
  let obj = {};
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (sequence === 1) {
      add = true
      sub = false
    }

    if (sequence === numRows) {
      add = false
      sub = true
    }

    if (add) {
      arr.push(sequence);
      if (obj[sequence]) {
        obj[sequence] += s[i]
      } else {
        obj[sequence] = s[i]
      }
      sequence++;
    }
    
    if (sub) {
      arr.push(sequence);
      if (obj[sequence]) {
        obj[sequence] += s[i]
      } else {
        obj[sequence] = s[i]
      }
      sequence--;
    }
  }

  let objKeys = Object.keys(obj);

  objKeys.map(item => {
    answer += obj[item]
  })

  return answer;
}

console.log(convert("PAYPALISHIRING", 3));