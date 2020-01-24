class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numDict = {}
        for i in range(len(nums)):
            numDict[nums[i]] = i
        for i in range(len(nums)):
            curr = target - nums[i]
            if curr in numDict.keys() and numDict[curr] != i:
                return [i, numDict[curr]]
                
                