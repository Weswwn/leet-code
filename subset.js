var subsets = function(nums) {
  let array = [];
  
  let recurse = (permutation, index) => {
      array.push(permutation);
      console.log(permutation, index);
      
      for (let i = index; i < nums.length; i++) {
          recurse(permutation.concat(nums[i]), i + 1);
      }
      
  }
  recurse([], 0)
  return array;
};

console.log(subsets([1,2,3]));