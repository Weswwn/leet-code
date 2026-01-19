class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1

        def largerThanRight(numToCheck, right):
            # If the mid point is larger than the right
            if nums[numToCheck] > nums[right]:
                return True
            else:
                return False


        while right > left:
            mid = (right + left) // 2
            isLarger = largerThanRight(mid, right)

            if isLarger:
                left = mid + 1
            else:
                right = mid
        return nums[right]
# If sorted in ascending order
# left < mid < right

#[6,1,2,3,4,5]
# If mid is larger than right - that means we've rotated and need to check the right side