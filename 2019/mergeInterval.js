/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let count = 0;
    intervals.sort((a, b) => a[0] - b[0])
    while (count <= intervals.length - 2) {
        if (intervals[count][0] <= intervals[count + 1][0] &&
           intervals[count][1] >= intervals[count + 1][0]) {
            intervals[count] = intervals[count].concat(intervals[count + 1]);
            intervals.splice(count + 1, 1);
            intervals[count] = [Math.min.apply(Math, intervals[count]), 
                                Math.max.apply(Math, intervals[count])];
        } else {
            count++;
        }
    }
    return intervals;
};