'use strict';
console.log("pavankumar");

function pageload(){
	document.location.reload();
}

const submitbtn=document.querySelector('.btn');
const btnre=document.querySelector('.btn__re');
submitbtn.addEventListener('click',function(){
	const option1=document.querySelector('#option__1').value;
	const option2=document.querySelector('#option__2').value;
	const value1=document.querySelector('.value_1').value;
	// console.log(value1);
	// console.log(typeof typetemp);
	console.log(option1);
	console.log(option2);
	if(option1==='cel' && option2==='far'){
		let celcius=Number((value1*(9/5))+32);
		document.querySelector('#result').value=celcius;
	}
	else if(option1==='far' && option2==='cel'){
		let farenheit=Number((5/9)*(value1-32));
		document.querySelector('#result').value=farenheit;
	}
});

btnre.addEventListener('click',pageload);
