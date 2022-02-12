/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArr = [...nums]
  
    return newArr.concat(nums)
};
