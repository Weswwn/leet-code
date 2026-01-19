var find132pattern = function(nums) {
    if (nums.length < 3) return false
  
    let mid = -Infinity
    let stack = []
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < mid) return true
  
      while (stack.length > 0 && nums[i] > stack[stack.length-1]) {
        mid = stack.pop()
      }
  
      stack.push(nums[i])
    }
  
    return false
  };

  console.log(find132pattern([1,4,2,3]));