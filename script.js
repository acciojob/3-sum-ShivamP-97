function threeSum(arr, target) {
	arr.sort((a,b)=>a-b);
	let sum=Infinty;
	for(let i=0;i<arr.length-2;i++){
		let left=i+1;
		let right=arr.length-1;
		while(left<right){
			const currentSum=arr[i]+arr[left]+arr[right];
			if(Math.abs(target-currentSum)<Math.abs(target-sum)){
				sum=currentSum;
			}
			if(currentSum<target){
				left++;
			}else if(currentSum>target){
				right--;
			}else{
				return currentSum;
			}
		}
	}
	return sum;
}

module.exports = threeSum;
