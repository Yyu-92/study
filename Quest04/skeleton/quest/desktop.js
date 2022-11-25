let desktop = document.getElementsByClassName('desktop')[0];

/** 바탕화면과 메뉴탭 관련 변수들 */
let wallpaper = ''; 
let wallpaperInner = '';
let wallpaperArr = [];
let menuBar = '';
let tabPlus = '';
let tabList = '';
let tabListArr = [];
let tabClose = '';
let tabCloseBtnArr = [];

/** icon 변수들 */
let icon ='';
let iconArr = []; 
let folderArr = [];
let iconFolderArr = [];

/** input 관련 변수들 */
let inputArea = '';
let submitBtn = '';

/** folderWindow 관련 변수들 */
let folderWindow = '';
let folderWindowArr = [];
let windowHeader = '';
let closeBtn = '';
let windowCloseBtnArr = [];

/** header 생성 */
let header = document.createElement('header');
header.setAttribute('class', 'header');
desktop.before(header);

/** tabBar 생성 */
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
		this.createTab();
		this.createPlusBtn();
		//this.removeTab();
		this.createWallpaper();
		this.createMenubar();
		this.createInput();
	}

	/** tab 만들기 */
	createTab(){
		tabList = document.createElement('a');
		tabList.setAttribute('class', 'tablist');
		tabList.setAttribute('id', 'tablist'+this.indexNum);
		tabList.innerHTML = `<p> 바탕화면👀${this.indexNum} </p>`;
		tabBar.append(tabList);
		tabListArr.push(tabList);

		tabClose = document.createElement('button');	
		tabClose.setAttribute('class', 'tabclose');
		tabClose.innerText = 'X';
		tabList.append(tabClose);
		tabCloseBtnArr.push(tabClose);	
	}

	/** tab 삭제하기 */
	removeTab(){
		// for(let i = 0; i < tabCloseBtnArr.length; i++){
		// 	tabCloseBtnArr[i].addEventListener('click', function(e){
		// 		e.preventDefault();
		// 		tabListArr[i].remove();
		// 		wallpaperArr[i].remove();

		// 		tabListArr.splice(i, 1);
		// 		tabCloseBtnArr.splice(i, 1);
		// 		wallpaperArr.splice(i, 1);
				
		// 		for(let j = 0; j < wallpaperArr.length; j++){
		// 			wallpaperArr[j].classList.remove('current');
		// 		}
		// 		wallpaperArr[i-1].classList.add('current');
		// 	});
		// }
	}

	/** tab 플러스 버튼 만들기 */
	createPlusBtn(){
		tabPlus = document.createElement('button');
		tabPlus.setAttribute('class', 'tabplus');
		tabPlus.innerText = '+'
		tabBar.append(tabPlus);
	}

	/** 바탕화면 만들기 */
	createWallpaper(){
		wallpaper = document.createElement('a');
		wallpaper.setAttribute('class', 'wallpaper');
		wallpaper.setAttribute('id', 'wallpaper'+this.indexNum);
		desktop.append(wallpaper);
		wallpaperArr.push(wallpaper);

		wallpaperInner = document.createElement('div');
		wallpaperInner.setAttribute('class', 'wallpaper-inner');
		wallpaperInner.setAttribute('id', 'wallpaper-inner'+this.indexNum);
		wallpaperInner.innerHTML = `<p>  바탕화면 ${this.indexNum} 입니다^^  </p>`;
		wallpaper.append(wallpaperInner);
	}

	/** menubar 만들기 */
	createMenubar(){
		menuBar = document.createElement('div');
		menuBar.setAttribute('class', 'menu-bar');
		menuBar.setAttribute('id', 'menu-bar'+this.indexNum);
		desktop.after(menuBar);
	}

	/** input 만들기 */
	createInput(){
		for(let i = 0; i < 2; i++){
			inputArea = document.createElement('input');
			inputArea.type = 'text';
			inputArea.class = 'constructor';
			inputArea.id = (i == 0) ? 'folderConst' : 'iconConst';
			inputArea.placeholder = (i == 0) ? '폴더 개수를 입력해 주세요.' : '아이콘 개수를 입력해 주세요.';
			menuBar.append(inputArea);

			submitBtn = document.createElement('input');
			submitBtn.type = 'submit';
			submitBtn.value = '생성';
			submitBtn.id = (i == 0) ? 'folderSubmit' : 'iconSubmit';
			menuBar.append(submitBtn);
		}
	}
};

class DesktopExtends{
	constructor(){
		
	}
	
	/** 드래그 기능 */
	movingIcon(selectIcon){
		let lastX = 0;
		let lastY = 0; 
		let startX = 0; 
		let startY = 0;

		selectIcon.addEventListener('mousedown', function(e){
			e.preventDefault(); // 정상적인 구현을 위한 디폴트 이벤트 제거
			
			/** 마우스 왼쪽클릭 0 / 오른쪽 2 / 휠 1 */
			if(e.button !== 0){ 
				return;
			}

			if(e.clientX < 0){
				return;
			}
		
			
			startX = e.clientX // 처음 파일 x좌표 - 클릭한 위치값
			startY = e.clientY // 처음 파일 y좌표 - 클릭한 위치값

			
			document.addEventListener('mouseup', onRemoveEvent); // 마우스 클릭을 멈췄을 때, 내부에서 이벤트를 해체하는 함수를 바인딩
			document.addEventListener('mousemove', onMove); 
		});
		
		function onMove(e) { 
			e.preventDefault(); 
			
			selectIcon.style.position = 'fixed';
			
			lastX = e.clientX - startX; // 이동한 거리 x
			lastY = e.clientY - startY; // 이동한 거리 y

			selectIcon.style.left = (selectIcon.offsetLeft + lastX)+"px";
			selectIcon.style.top = (selectIcon.offsetTop + lastY)+"px";

			startX = e.clientX; //원래 위치값도 옮겨줘야함 (3번쨰로 옮기면 2번째로 옮겨진 그 위치가 원래 위치값이 되니까 )
			startY = e.clientY;
		}

		/** 클릭을 해제했을 때 객체가 이동이 되면 안되므로 함수들 해제*/
		function onRemoveEvent() { 
			//selectIcon.style.position = 'fixed';
			document.removeEventListener('mouseup', onRemoveEvent); 
			document.removeEventListener('mousemove', onMove); 
		} 
	}

	/** 클릭시 해당 요소가 가장 위로 */
	clickUp(upItemArr){	
		upItemArr.forEach(function(f){
			f.addEventListener('mousedown',function(){
				for(let i = 0; i < upItemArr.length; i++){
					upItemArr[i].classList.remove('active');
				}
				this.classList.add('active');
			});

			//document.removeEventListener('mouseup', onRemoveEvent); 
		});
	}
}

class Icon extends DesktopExtends{
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(num){
		super();
		this.num = num;
		this.createIcon();
		super.clickUp(iconFolderArr);
	}

	/** icon 만들기*/
	createIcon(){
		for(let i = 0; i < this.num; i++){
			icon = document.createElement('img');
			icon.src = 'images/file.png';
			icon.alt = 'file';
			icon.setAttribute('class', 'file');
			document.querySelector('.current').querySelector('.wallpaper-inner').append(icon);	
			iconArr.push(icon);

			iconFolderArr.push(icon);
			
			document.getElementById('iconConst').value = '';
		}
	}
}

class Folder extends DesktopExtends{
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(num){
		super();
		this.num = num;
		this.createFolder();
		this.createFolderWindow();
		super.clickUp(iconFolderArr);
	}

	/** folder 만들기 */
	createFolder(){
		for(let i = 0; i < this.num; i++){
			icon = document.createElement('img');
			icon.src = 'images/folder.png';
			icon.alt = 'folder';
			icon.setAttribute('class', 'folder');
			document.querySelector('.current').querySelector('.wallpaper-inner').append(icon);	
			folderArr.push(icon);

			iconFolderArr.push(icon);

			document.getElementById('folderConst').value = '';
		}
	}

	/** folderWindow 만들기 */
	createFolderWindow(){
		for(let i = 0; i < this.num; i++){
			folderWindow = document.createElement('div');
			folderWindow.setAttribute('class', 'folder-window');
			folderWindow.innerHTML = '<span>폴더입니다🤨</span>';	
			document.querySelector('.current').querySelector('.wallpaper-inner').append(folderWindow);
			folderWindowArr.push(folderWindow);

			windowHeader = document.createElement('div');
			windowHeader.setAttribute('class', 'window-header');	
			folderWindow.append(windowHeader);

			closeBtn = document.createElement('button');
			closeBtn.setAttribute('class', 'close');
			closeBtn.innerText = 'X';	
			windowHeader.append(closeBtn);
			windowCloseBtnArr.push(closeBtn);
		}
	}
};

class Window extends DesktopExtends{
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(){
		super();
		this.doubleClick();
		this.clickClose();
		super.clickUp(folderWindowArr);
	}
	
	/** folderWindow 생성 */
	doubleClick(){
		for(let i = 0; i < folderArr.length; i++){
			folderArr[i].addEventListener('dblclick',function(){
				folderWindowArr[i].style.display = 'block';
			});
		}
	}

	/** folderWindow 끄기 */
	clickClose(){
		windowCloseBtnArr.forEach(function(c){
			c.addEventListener('click', function(){
				this.parentElement.parentElement.style.display = 'none';
			});
		});
	}

};



