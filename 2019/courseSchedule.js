/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let obj = {};
  let stack = [];
  
  for (let i = 0; i < numCourses; i++) {
      obj[i] = 0;
  }
  prerequisites.forEach(course => obj.hasOwnProperty(course[0]) ? obj[course[0]]++ : obj[course[0]]);
  for (let key in obj) {
      if (obj[key] === 0) {
          stack.push(key);
      }
  }
  let count = 0;
  while (stack.length > 0) {
      let curr = stack.pop();
      count++;
      for (let i = 0; i < prerequisites.length; i++) {
          if (prerequisites[i][1] == curr) {
              obj[prerequisites[i][0]]--;
              if (obj[prerequisites[i][0]] === 0) {
                  stack.push(prerequisites[i][0]);
              }
          }
      }
  }
  
  return count === numCourses;
};