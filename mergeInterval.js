/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => {
        return a[0] - b[0];
    })

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] <= intervals[i + 1][1] && intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i].join(intervals[i + 1]);
            let start = Math.min(intervals[i][0], intervals[i + 1][0]);
            let end = Math.max(intervals[i][1], intervals[i + 1][1]);
            intervals.splice(i,1);
            intervals[i][0] = start;
            intervals[i][1] = end;
            i--;
        } else if (intervals[i + 1][1] <= intervals[i][1] && intervals[i + 1][0] >= intervals[i + 1][0]) {
            intervals[i].join(intervals[i + 1]);
            let start = Math.min(intervals[i][0], intervals[i + 1][0]);
            let end = Math.max(intervals[i][1], intervals[i + 1][1]);
            intervals.splice(i,1);
            intervals[i][0] = start;
            intervals[i][1] = end;
            i--;
        }
    }
    return intervals;
};