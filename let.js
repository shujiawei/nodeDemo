function demo (){//由于JavaScript的变量作用域实际上是函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的：
	for(let i = 0; i < 9 ; i ++) {//这一种 叫做块级作用域

	}
}
//结构赋值

let person = {
	name: 'lisi',
	age: 11,
	say() {
		console.log(44)
	}
}

let {name,age,say} = person
console.log(name)
console.log(age)
console.log(say())

// apply(this,[1,2]) call(this,1,2,3,4) 两者的区别