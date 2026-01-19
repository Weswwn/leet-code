/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  if (!intervals || intervals.length < 1) return 0;
  
  let minEnd = []; minEnd.push(intervals[0][1]);
  let count = 1;
  
  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < Math.min(...minEnd)) {
          count++;
          minEnd.push(intervals[i][1]);
      } else {
          let emptyRoomIndex = minEnd.indexOf(Math.min(...minEnd));
          minEnd[emptyRoomIndex] = intervals[i][1];
      }
  }
  return count;
};