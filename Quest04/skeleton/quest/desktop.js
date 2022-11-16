class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(screen, constBtn, inputValue, buildImg, imgSrc){
		this.screen = screen;
		this.constBtn = constBtn;
		this.inputValue = inputValue;
		this.buildImg = buildImg;
		this.imgSrc = imgSrc;
	}

	
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

/** 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다. */
/** 생성 클릭시 폴더 및 아이콘 생성 */
let desktop = document.getElementsByClassName('desktop')[0];
let folderValue = 0;
let lastX = 0;
let lastY = 0; 
let startX = 0; 
let startY = 0; 
let folder ='';
let folderArr = [];

function createFolder(){
	folderValue = Number(document.getElementById('folderConst').value);
	
	for(let i = 0; i < folderValue; i++){
		folder = document.createElement('img');
		folder.setAttribute('src', 'images/folder.png');
		folder.setAttribute('alt', 'folder');
		folder.setAttribute('class', 'folder')
		desktop.appendChild(folder);	

		folderArr.push(folder);
	}
	//console.log('folder : ' + folder);
	//console.log('folderArr : ' + folderArr);
	
	folderArr.forEach(movingIcon);

	function doubleClick(){
		
	}

	doubleClick(folder)

	return folder;
}

document.getElementById('folderSubmit').addEventListener('click', createFolder);


/** 아이콘들을 드래그를 통해 움직일 수 있어야 합니다. */
function movingIcon(selectIcon){
	selectIcon.addEventListener('mousedown', function(e){
		e.preventDefault(); 
		startX = e.clientX; // 처음 파일 x좌표 - 클릭한 위치값
		startY = e.clientY; // 처음 파일 y좌표 - 클릭한 위치값
		selectIcon.style.position = 'absolute';
		console.log(startX, startY);
		
		document.addEventListener('mouseup', onRemoveEvent); // 마우스 클릭을 멈췄을 때, 내부에서 이벤트를 해체하는 함수를 바인딩
		document.addEventListener('mousemove', onMove); 
	});
	
	/** 클릭을 해제했을 때 객체가 이동이 되면 안되므로 함수들 해제*/
	function onRemoveEvent() { 
		selectIcon.style.position = 'fixed';
		document.removeEventListener('mouseup', onRemoveEvent); 
		document.removeEventListener('mousemove', onMove); 
	} 
	
	function onMove(e) { 
		e.preventDefault(); 
		selectIcon.style.position = 'fixed';

		lastX = startX - e.clientX; 
		lastY = startY - e.clientY;
		//console.log(lastX, lastY);
		
		startX = e.clientX; //원래 위치값도 옮겨줘야함 (3번쨰로 옮기면 2번째로 옮겨진 그 위치가 원래 위치값이 되니까 )
		startY = e.clientY; 
		console.log(startX, startY)
		selectIcon.style.left = (selectIcon.offsetLeft- lastX)+"px";
		selectIcon.style.top = (selectIcon.offsetTop - lastY)+"px";
	}

}

//console.log('folder : ' + folder);
// console.log('folderArr : ' + folderArr);










// document.getElementById('iconSubmit').addEventListener('click', function(){
// 	var iconValue = document.getElementById('iconConst').value;
// 	for(var i = 0; i < iconValue; i++){
// 		var file = document.createElement('img');
// 		file.setAttribute('src', 'images/file.png');
// 		file.setAttribute('alt', 'folder');
// 		file.setAttribute('class', 'files')
// 		desktop.appendChild(file);	
// 	}
	
// 	var lastX = 0;
// 	var lastY = 0; 
// 	var startX = 0; 
// 	var startY = 0; 

	
// 	file.addEventListener('mousedown', function(e){
// 		e.preventDefault(); 
// 		startX = e.clientX; // 처음 파일 x좌표 - 클릭한 위치값
// 		startY = e.clientY; // 처음 파일 y좌표 - 클릭한 위치값
// 		console.log(startX, startY);
		
// 	document.addEventListener('mouseup', onRemoveEvent); // 마우스 클릭을 멈췄을 때, 내부에서 이벤트를 해체하는 함수를 바인딩
	
// 	document.addEventListener('mousemove', onMove); 
// 	});

// 	function onRemoveEvent() { 
// 		document.removeEventListener('mouseup', onRemoveEvent); 
// 		document.removeEventListener('mousemove', onMove); 
// 	} 

// 	function onMove(e) { 
// 		e.preventDefault(); 
// 		//lastX = (startX - file.offsetLeft)+"px"; 
// 		//lastY = (startY - file.offsetTop)+"px"; 
// 		lastX = startX -  e.clientX; 
// 		lastY = startY - e.clientY;
// 		// console.log(e.clientX, e.clientY);
// 		// console.log(file.offsetLeft+"px", file.offsetTop+"px");
// 		 console.log(lastX, lastY);
		
// 		//startX = e.clientX; //원래 위치값도 옮겨줘야함 (3번쨰로 옮기면 2번째로 옮겨진 그 위치가 원래 위치값이 되니까 )
// 		//startY = e.clientY; 

// 		file.style.left = (startX - lastX)+"px";
// 		file.style.top = (startY - lastY)+"px";
		
// 	}
	
// });







