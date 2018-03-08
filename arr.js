let arr = [9,2,5,4,1,5,2,6,5,54,8,96,52,5];
//[2,9,5,4,1,5,2,6,5,54,8,96,52,5];
//[2,9,5,4,1,5,2,6,5,54,8,96,52,5];
//排序
//从小到大
	for(let i = 0; i < arr.length ; i ++) {
		for(let a = i+1 ; a < arr.length; a++) {
			if(arr[i] > arr[a]){
				tep = arr[i]
				arr[i] = arr[a]
				arr[a] = tep
			}
		}
	}
	console.log(arr)
//从大到小
for(let i = 0; i < arr.length ; i ++) {
	for(let a = i+1 ; a < arr.length; a++) {
		if(arr[i] < arr[a]){
			tep = arr[i]
			arr[i] = arr[a]
			arr[a] = tep
		}
	}
}
console.log(arr)
//去重[ 96, 54, 52, 9, 8, 6, 5, 5, 5, 5, 4, 2, 2, 1 ]

for(let i =0;i<arr.length; i++) {
	for(let a = i+1 ; a < arr.length; a++) {
		if(arr[i] == arr[a]){
			arr.splice(a,1)
			a--
		}
	}
}
console.log(arr)

function demo (a,b,c,v) {
	console.log(arguments);
}

function params (a,b,...rest) { //rest 是获取多余的参数
	console.log(rest)
}
demo(2,3,45,45,56,6,76,7,3,43,5)
params(2,3,45,45,56,6,76,7,3,43,5)


var count = 0
var oldParnint= window.parseInt
window.parseInt = function () {
	count ++ 
	return oldParnint.apply(null, arguments)
}