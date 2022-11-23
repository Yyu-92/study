let desktop = document.getElementsByClassName('desktop')[0];
let folderValue = 0;
let iconValue = 0;
let folderArr = [];
let iconArr = []; 
let icon ='';
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
let windowHeader = '';
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
	constructor(indexNum){
		this.indexNum = indexNum;
		this.start();
	}

	start(){
		this.setCreateTab();
		this.setCreateWallpaper();
		this.setCreatePlusBtn();
	}

	/** tab 만들기 */
	setCreateTab(){
		tabList = document.createElement('a');
		tabList.setAttribute('class', 'tablist');
		tabList.setAttribute('id', 'tablist'+this.indexNum);
		tabList.innerText = '유진의 바탕화면👀';

		tabClose = document.createElement('button');	
		tabClose.setAttribute('class', 'tabclose');
		tabClose.innerText = 'X';
		
		tabBar.append(tabList);
		tabList.append(tabClose);
		tabListArr.push(tabList);
		
	}

	/** tab 플러스 버튼 만들기 */
	setCreatePlusBtn(){
		tabPlus = document.createElement('button');
		tabPlus.setAttribute('class', 'tabplus');
		tabPlus.innerText = '+'
		tabBar.append(tabPlus);
	}

	/** 바탕화면 만들기 */
	setCreateWallpaper(){
		wallpaper = document.createElement('a');
		wallpaper.setAttribute('class', 'wallpaper');
		wallpaper.setAttribute('id', 'wallpaper'+this.indexNum);

		wallpaperInner = document.createElement('div');
		wallpaperInner.setAttribute('class', 'wallpaper-inner');
		wallpaperInner.setAttribute('id', 'wallpaper-inner'+this.indexNum);
		wallpaperInner.innerHTML = `<p> 🐬 바탕화면 ${this.indexNum} 입니다^^ 🐬 </p>`;
	
		desktop.append(wallpaper);
		wallpaper.append(wallpaperInner);
	}

	/** menubar 만들기 */
	setCreateMenubar(){
		menuBar = document.createElement('div');
		menuBar.setAttribute('class', 'menu-bar');
		menuBar.setAttribute('id', 'menu-bar'+this.indexNum);
		desktop.after(menuBar);
	}

	/** input 만들기 */
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
	
	/** 드래그 기능 */
	movingIcon(selectIcon){
		selectIcon.addEventListener('mousedown', function(e){
			e = e || window.event;
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
		
		function onMove(e) { 
			e = e || window.event;
			e.preventDefault(); 
			
			selectIcon.style.position = 'fixed';
			
			lastX = e.clientX - startX; // 이동한 거리 x
			lastY = e.clientY - startY; // 이동한 거리 y
			
			startX = e.clientX; //원래 위치값도 옮겨줘야함 (3번쨰로 옮기면 2번째로 옮겨진 그 위치가 원래 위치값이 되니까 )
			startY = e.clientY; 

			selectIcon.style.left = (selectIcon.offsetLeft + lastX)+"px";
			selectIcon.style.top = (selectIcon.offsetTop + lastY)+"px";
		}

		/** 클릭을 해제했을 때 객체가 이동이 되면 안되므로 함수들 해제*/
		function onRemoveEvent() { 
			//selectIcon.style.position = 'fixed';
			document.removeEventListener('mouseup', onRemoveEvent); 
			document.removeEventListener('mousemove', onMove); 
		} 
	}
}

class Icon extends DesktopExtends{
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(num){
		super();
		this.num = num;
		this.createIcon();
	}

	/** icon 만들기*/
	createIcon(){
		for(let i = 0; i < this.num; i++){
			icon = document.createElement('img');
			icon.src = 'images/file.png';
			icon.alt = 'file';
			icon.setAttribute('class', 'file');
			document.querySelector('.current').querySelector('.wallpaper-inner').append(icon);	
		}
	}
}

class Folder extends DesktopExtends{
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(num){
		super();
		this.num = num;
		this.createFolder();
	}

	/** folder 만들기 */
	createFolder(){
		for(let i = 0; i < this.num; i++){
			icon = document.createElement('img');
			icon.src = 'images/folder.png';
			icon.alt = 'folder';
			icon.setAttribute('class', 'folder');
			document.querySelector('.current').querySelector('.wallpaper-inner').append(icon);		
		}
	}
};

class Window extends DesktopExtends{
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(array){
		super();
		this.array = array;
		this.doubleClick();
	}

	/** folder창 만들기 */
	doubleClick(){
		this.array.forEach(function(box){
			box.addEventListener('dblclick', function(){ 
				folderWindow = document.createElement('div');
				folderWindow.setAttribute('class', 'folder-window');
				folderWindow.innerHTML = '<span>폴더입니다^^휴;;</span>';
				
				windowHeader = document.createElement('div');
				windowHeader.setAttribute('class', 'window-header');
				
				closeBtn = document.createElement('button');
				closeBtn.setAttribute('class', 'close');
				closeBtn.innerText = 'X';
				
				this.parentElement.append(folderWindow);
				folderWindow.append(windowHeader);
				windowHeader.append(closeBtn);

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
						//folderWindow.style.position = 'fixed';
						document.removeEventListener('mouseup', onRemoveEvent); 
						document.removeEventListener('mousemove', onMove); 
					} 
					
					function onMove(e) { 
						e.preventDefault(); 
						//folderWindow.style.position = 'fixed';
					
						lastX = e.clientX - startX; // 이동한 거리 x
						lastY = e.clientY - startY; // 이동한 거리 y
						
						startX = e.clientX; //원래 위치값도 옮겨줘야함 (3번쨰로 옮기면 2번째로 옮겨진 그 위치가 원래 위치값이 되니까 )
						startY = e.clientY; 
						
						folderWindow.style.left = (folderWindow.offsetLeft + lastX)+"px";
						folderWindow.style.top = (folderWindow.offsetTop + lastY)+"px";		
					}
				}

				function clickClose(btn){
					btn.addEventListener('click', function(){
						this.parentElement.parentElement.style.display = 'none';	
					});
				}

				movingIcon(windowHeader);
				clickClose(closeBtn);

			});	
		});
	}
};
























