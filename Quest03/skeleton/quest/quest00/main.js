var displayedImage = document.getElementsByClassName('displayed-img')[0];
var thumbBar = document.getElementsByClassName('thumb-bar')[0];
var darkBtn = document.getElementsByClassName('dark')[0];
var overlay = document.getElementsByClassName('overlay')[0];

/** Declaring the array of image filenames */
//var imgArr = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
var imgArr = [];
for(var i = 0; i < 5; i++){
    imgArr.push('pic' + (i + 1) + '.jpg');
};

/** Declaring the alternative text for each image file */
var imgText = ['big eye','desert','flower','mural','butterfly'];
/** Looping through images **/

/**
 * img요소를 생성하여
 * 썸네일 이미지들을 한번씩 돌면서 경로와 alt값을 넣어주고
 * thumbBar의 자식요소로 생성하기
 * newImage클릭 시 해당 이미지의 src값을 displayedImage의 src값에 넣어주기
 * darken버튼과 lighten버튼 기능 만들기-버튼안의 텍스트와 overlay의 backgroundColor 바꿔주기
 */

var newImageArr = [];
for(var i = 0; i < imgArr.length; i++){
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/'+imgArr[i]);
    newImage.setAttribute('alt', imgText[i]);
    thumbBar.appendChild(newImage);

    /** displayedImage의 src속성을 바꿔주기 위한 foreach문에 필요한 newImage 배열 생성 */
    newImageArr.push(newImage);   
};

/** src변경 함수 */
function displayed(imgItem){
    imgItem.addEventListener('click', function(){
        displayedImage.setAttribute('src', this.getAttribute('src'));
        displayedImage.setAttribute('alt', this.getAttribute('alt'));
    });
};

newImageArr.forEach(displayed);

/** Wiring up the Darken/Lighten button */

/** btn클릭 시 btn 안의 글자가 Darken이면 어둡게, 아니라면 밝게 하는 함수 적용 */
darkBtn.addEventListener('click', function(){
    if(darkBtn.innerHTML === 'Darken'){
        textLight();
    }else{
        textDark();
    };
});

function textLight(){
    darkBtn.innerHTML = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
};

function textDark(){
    darkBtn.innerHTML = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
};




