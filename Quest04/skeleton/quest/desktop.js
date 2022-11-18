class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(){
	
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

let desktop = document.getElementsByClassName('desktop')[0];
let folderArr = [];
let lastX = 0;
let lastY = 0; 
let startX = 0; 
let startY = 0;
let wallpaper = ''; 
let wallpaperInner = '';
let menuBar = '';
let tabPlus = '';
let tabList = '';
let tabClose = '';

let body = document.querySelector('body');

let header = document.createElement('header');
header.setAttribute('class', 'header');
desktop.before(header);

let tabBar = document.createElement('div');
tabBar.setAttribute('class', 'tab-bar');
header.append(tabBar);

/** tab 만들기 */
function setCreatePlusTab(){
	tabList = document.createElement('a');
	tabClose = document.createElement('button');
	tabList.setAttribute('class', 'tablist');
	tabClose.setAttribute('class', 'tabclose');
	tabClose.innerText = 'X';
	tabList.innerText = '유진의 바탕화면👀';
	//tabList.style.width = '180px';
	tabBar.append(tabList);
	tabList.append(tabClose);

	clickClose(tabClose);

	return tabClose;
}

setCreatePlusTab();

/** tab 플러스 버튼 만들기 */
function setCreatePlusBtn(){
	tabPlus = document.createElement('button');
	tabPlus.setAttribute('class', 'tabplus');
	tabPlus.innerText = '+'
	tabBar.append(tabPlus);

	return tabPlus;
}
setCreatePlusBtn();
console.log(tabPlus);

/** 바탕화면 만들기 */
function setCreateWallpaper(){
	wallpaper = document.createElement('div');
	wallpaperInner = document.createElement('div');
	wallpaper.setAttribute('class', 'wallpaper');
	wallpaperInner.setAttribute('class', 'wallpaper-inner');
	desktop.append(wallpaper);
	wallpaper.append(wallpaperInner);

	return wallpaperInner;
}
setCreateWallpaper();
console.log(wallpaper);

/**  */
function setCreateMenubar(){
	menuBar = document.createElement('div');
	menuBar.setAttribute('class', 'menu-bar');
	wallpaperInner.append(menuBar);

	return menuBar;
}

setCreateMenubar();
console.log(menuBar);

/** tabplustbtn 클릭 시 tab&&바탕화면 생성 */
tabPlus.addEventListener('click', function(){
	setCreatePlusTab();
	setCreateWallpaper();
	setCreateMenubar();
	setCreateInput();
});



// for(let j = 0; j < tabListArr.lenght; j++){
// 	(function(j){
// 		tabListArr[j].addEventListener('click', function(){
// 			wallpaperArr[j].style.zIndex = 999;
// 		});
// 	})(j);
// }
// console.log(tabListArr)

/** 생성input 만들기 */
function setCreateInput(){
	for(let i = 0; i < 2; i++){
		let inputArea = document.createElement('input');
		inputArea.type = 'text';
		inputArea.class = 'constructor';
		inputArea.id = (i == 0) ? 'folderConst' : 'iconConst';
		inputArea.placeholder = (i == 0) ? '폴더 갯수를 입력해주세요.' : '아이콘 갯수를 입력해주세요.';

		let SubmitBtn = document.createElement('input');
		SubmitBtn.type = 'submit';
		SubmitBtn.value = '생성';
		SubmitBtn.id = (i == 0) ? 'folderSubmit' : 'iconSubmit';

		menuBar.append(inputArea);
		menuBar.append(SubmitBtn);
	}
}

setCreateInput();

/** 아이콘 드래그 */
function movingIcon(selectIcon){
	selectIcon.addEventListener('mousedown', function(e){
		e.preventDefault(); 
		
		/** 마우스 왼쪽클릭 0 / 오른쪽 2 / 휠 1 */
		if(e.button !== 0){ 
			return;
		}
		
		startX = e.clientX // 처음 파일 x좌표 - 클릭한 위치값
		startY = e.clientY // 처음 파일 y좌표 - 클릭한 위치값
		if(! this){

		}
		//this.style.position = 'absolute';
		
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
	
		lastX = e.clientX - startX; // 이동한 거리 x
		lastY = e.clientY - startY; // 이동한 거리 y
		//console.log(lastX, lastY);
		
		startX = e.clientX; //원래 위치값도 옮겨줘야함 (3번쨰로 옮기면 2번째로 옮겨진 그 위치가 원래 위치값이 되니까 )
		startY = e.clientY; 

		selectIcon.style.left = (selectIcon.offsetLeft + lastX)+"px";
		selectIcon.style.top = (selectIcon.offsetTop + lastY)+"px";
		//console.log(startX, startY)
	}

}


/** 폴더창닫기 */
function clickClose(btn){
	btn.addEventListener('click', function(){
		this.parentElement.style.display = 'none';	
	});
}


/** 아이콘생성 */
function createIcon(name){
	name.addEventListener('click', function(){
		folderValue = (name == folderSubmit) ? Number(document.getElementById('folderConst').value) : Number(document.getElementById('iconConst').value);
		console.log(folderValue);
		for(let i = 0; i < folderValue; i++){
			let icon = document.createElement('img');
			icon.src = (name == folderSubmit) ? 'images/folder.png' : 'images/file.png';
			icon.alt = (name == folderSubmit) ? 'folder' : 'file';
			icon.class = icon.alt;
			wallpaperInner.appendChild(icon);	
			//icon.after(icon.class);

			folderArr.push(icon);
		}
		folderArr.forEach(movingIcon); 
		folderArr.forEach(doubleClick);

		document.getElementById('folderConst').value = '';
		document.getElementById('iconConst').value = '';

	});
}
    
let folderSubmit = document.getElementById('folderSubmit');
let iconSubmit = document.getElementById('iconSubmit');

createIcon(folderSubmit);
createIcon(iconSubmit);

let folderImg = document.getElementsByTagName('img'); // HTMLCollection
//let folderArr = [].slice.call(folderImg); // => 배열로 변환


/** 아이콘 더블클릭시 폴더창 생성 및 드래그 */
function doubleClick(aa){
	aa.addEventListener('dblclick', function(){
		let folderWindow = document.createElement('div');
		let closeBtn = document.createElement('button');
		folderWindow.setAttribute('class', 'folderWindow');
		folderWindow.innerText = '폴더입니다^^휴;;';
		wallpaperInner.append(folderWindow);
		
		closeBtn.setAttribute('class', 'close');
		closeBtn.innerText = 'X';
		folderWindow.append(closeBtn);

		movingIcon(folderWindow);
		clickClose(closeBtn);	
	});	
}






















