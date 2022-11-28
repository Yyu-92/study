class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(){
		
	}

	
};


// let randomNum = Math.floor((Math.random()*(26-1))+1);
// console.log(randomNum);

/** pcBingo 생성 */
let numList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let pcBingo = [];

document.getElementById('start-btn').addEventListener('click', function(){
	for(let i = 0; i < 25; i++){
		let randomIndex = Math.floor(Math.random()*numList.length);
		pcBingo[i] = numList.splice(randomIndex, 1)[0];
	}

	console.log(pcBingo);
})

let userBingo = [];

/** userBingo 생성 */
function createUserBingo(){
	for(let i = 0; i < 25; i++){
		userBingo[i] = document.getElementById('num' + i).value;
	}
	
	console.log("userBingo : " + userBingo);
}


document.getElementById('submit-btn').addEventListener('click', function(){
	createUserBingo();

	let result = document.querySelector('.result').value;
	let resultIndex = userBingo.indexOf(result);
	
	/** 빙고 지우기 */
	document.getElementById('num' + resultIndex).value = 'X';
	document.getElementById('num' + resultIndex).style.fontSize = '55px';

	/** 등록값 초기화 */
	document.querySelector('.result').value = '';
});

