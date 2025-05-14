function leaveUnique(nums){
    for (let i = 1;i < nums.length;i++) {
        while (nums[i - 1] == nums[i]){
            nums.splice(i,1);
        }
    }
    return nums.length
}

let nums = [1,2,3,3,3,4,4,4,4,4,4,4,5,6,7,7,7,8,9,10];
console.log(leaveUnique(nums));
