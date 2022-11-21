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
let inputArea = '';
let submitBtn = '';
let folderWindow = '';
let closeBtn = '';
let tabListArr = [];

let header = document.createElement('header');
header.setAttribute('class', 'header');
desktop.before(header);

let tabBar = document.createElement('div');
tabBar.setAttribute('class', 'tab-bar');
header.append(tabBar);

class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(indexNum, btn1, btn2){
		this.indexNum = indexNum;
		this.btn1 = btn1;
		this.btn2 = btn2;
		this.start();
	}

	start(){
		this.setCreateTab();
		this.setCreateWallpaper();
		this.setCreateMenubar();
		this.setCreateInput();
		this.setCreatePlusBtn();
	}

	setCreateTab(){
		tabList = document.createElement('a');
		tabClose = document.createElement('button');
		tabList.setAttribute('class', 'tablist');
		tabList.setAttribute('id', 'tablist'+this.indexNum);
		tabList.innerText = '유진의 바탕화면👀';
		tabClose.setAttribute('class', 'tabclose');
		tabClose.innerText = 'X';
		tabBar.append(tabList);
		tabList.append(tabClose);
	
		tabListArr.push(tabList);
	}

	setCreatePlusBtn(){
		tabPlus = document.createElement('button');
		tabPlus.setAttribute('class', 'tabplus');
		tabPlus.innerText = '+'
		tabBar.append(tabPlus);
	}

	setCreateWallpaper(){
		wallpaper = document.createElement('a');
		wallpaperInner = document.createElement('div');
		wallpaper.setAttribute('class', 'wallpaper');
		wallpaper.setAttribute('id', 'wallpaper'+this.indexNum);
		wallpaperInner.setAttribute('class', 'wallpaper-inner');
		wallpaperInner.setAttribute('id', 'wallpaper-inner'+this.indexNum);
		desktop.append(wallpaper);
		wallpaper.append(wallpaperInner);
	}

	setCreateMenubar(){
		menuBar = document.createElement('div');
		menuBar.setAttribute('class', 'menu-bar');
		wallpaperInner.append(menuBar);
	}

	setCreateInput(){
		for(let i = 0; i < 2; i++){
			inputArea = document.createElement('input');
			inputArea.type = 'text';
			inputArea.class = 'constructor';
			inputArea.id = (i == 0) ? 'folderConst' : 'iconConst';
			inputArea.placeholder = (i == 0) ? '폴더 갯수를 입력해주세요.' : '아이콘 갯수를 입력해주세요.';
	
			submitBtn = document.createElement('input');
			submitBtn.type = 'submit';
			submitBtn.value = '생성';
			submitBtn.id = (i == 0) ? 'folderSubmit' : 'iconSubmit';
	
			menuBar.append(inputArea);
			menuBar.append(submitBtn);

		}
	}
};

class DesktopExtends{
	constructor(){

	}
	
	movingIcon(selectIcon){
		selectIcon.addEventListener('mousedown', function(e){
			e.preventDefault(); 
			
			/** 마우스 왼쪽클릭 0 / 오른쪽 2 / 휠 1 */
			if(e.button !== 0){ 
				return;
			}
			
			startX = e.clientX // 처음 파일 x좌표 - 클릭한 위치값
			startY = e.clientY // 처음 파일 y좌표 - 클릭한 위치값
			
			
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

}

class Icon extends DesktopExtends{
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(num, indexNum){
		super();
		this.num = num;
		this.indexNum = indexNum;
	}
	createIcon(){
		for(let i = 0; i < this.num; i++){
			let icon = document.createElement('img');
			icon.src = 'images/file.png';
			icon.alt = 'file';
			icon.setAttribute('class', 'file');
			document.querySelector('#wallpaper-inner'+this.indexNum).appendChild(icon);	
		}
	}
}

class Folder extends DesktopExtends{
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(num, indexNum){
		super();
		this.num = num;
		this.indexNum = indexNum;
	}
	createFolder(){
		for(let i = 0; i < this.num; i++){
			let icon = document.createElement('img');
			icon.src = 'images/folder.png';
			icon.alt = 'folder';
			icon.setAttribute('class', 'folder');
			document.querySelector('#wallpaper-inner'+this.indexNum).appendChild(icon);		
			
		}
	}
};

class Window{
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(){
		
	}

	doubleClick(a){
		a.forEach(function(c){
			c.addEventListener('dblclick', function(){ 
				folderWindow = document.createElement('div');
				closeBtn = document.createElement('button');
				folderWindow.setAttribute('class', 'folderWindow');
				folderWindow.innerText = '폴더입니다^^휴;;';
				this.parentElement.append(folderWindow);
				closeBtn.setAttribute('class', 'close');
				closeBtn.innerText = 'X';
				folderWindow.append(closeBtn);

				function movingIcon(selectIcon){
					selectIcon.addEventListener('mousedown', function(e){
						e.preventDefault(); 
						
						/** 마우스 왼쪽클릭 0 / 오른쪽 2 / 휠 1 */
						if(e.button !== 0){ 
							return;
						}
						
						startX = e.clientX // 처음 파일 x좌표 - 클릭한 위치값
						startY = e.clientY // 처음 파일 y좌표 - 클릭한 위치값
						
						
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
				function clickClose(btn){
					btn.addEventListener('click', function(){
						this.parentElement.style.display = 'none';	
					});
				}
				movingIcon(folderWindow);
				clickClose(closeBtn);
			});	
		});
	}
	

};
























