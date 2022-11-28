class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(){
		
	}

	
};


// let randomNum = Math.floor((Math.random()*(26-1))+1);
// console.log(randomNum);

/** userBingo 생성 */

let userBingo = [];

function createUserBingo(){
	for(let i = 0; i < 25; i++){
		let userNum = document.getElementById('num' + i).value;

		/** 유효하지 않은 숫자 걸러내기 */
		if((1 > userNum) || (userNum > 25) || isNaN(Number(userNum))){
			alert('1~25사이의 숫자가 아닙니다.')
			return;
		}
		if(userBingo.indexOf(userNum) !== userBingo.lastIndexOf(userNum)){
			alert('중복된 숫자가 있습니다.');
			return;
		}
		userBingo[i] = userNum;
	}
	
	console.log("userBingo : " + userBingo);
}

/** pcBingo 생성 */

let numList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let pcBingo = [];

document.getElementById('start-btn').addEventListener('click', function(){
	createUserBingo();
	
	for(let i = 0; i < 25; i++){
		let randomIndex = Math.floor(Math.random() * numList.length);
		pcBingo[i] = numList.splice(randomIndex, 1)[0];
	}

	console.log("pcBingo : " + pcBingo);
})

let result = 0;
let resultList = [];
let resultIndex = 0;

document.getElementById('submit-btn').addEventListener('click', function(){
	
	result = document.querySelector('.result').value;

	if(resultList.indexOf(result) > -1){
		alert('이미 입력했던 숫자입니다.');
		return;
	}
	
	resultList.push(result);
	resultIndex = userBingo.indexOf(result);
	
	console.log(resultList);

	if((1 > result) || (result > 25) || isNaN(Number(result))){
		alert('1~25사이의 숫자를 입력해 주세요.');
		return;
	}

	

	/** 빙고 지우기 */
	document.getElementById('num' + resultIndex).value = 'X';
	document.getElementById('num' + resultIndex).style.fontSize = '55px';

	/** 등록값 초기화 */
	document.querySelector('.result').value = '';
});

