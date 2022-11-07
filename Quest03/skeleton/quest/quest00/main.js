var displayedImage = document.getElementsByClassName('displayed-img')[0];
var thumbBar = document.getElementsByClassName('thumb-bar')[0];

var btn = document.getElementsByClassName('dark')[0];
var overlay = document.getElementsByClassName('overlay')[0];

/* Declaring the array of image filenames */
var imgArr = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
var imgText = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'desert',
    'pic3.jpg' : 'flower',
    'pic4.jpg' : 'mural',
    'pic5.jpg' : 'butterfly'
}
/* Looping through images */

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
 //thumbBar.appendChild(newImage);

 /*img요소를 생성하여
썸네일 이미지들을 한번씩 돌면서 경로와 alt값을 넣어주고
thumbBar의 자식요소로 생성하기
newImage클릭 시 해당 이미지의 src값을 displayedImage의 src값에 넣어주기*/
for(var i = 0; i < imgArr.length; i++){
   var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/'+imgArr[i]);
    newImage.setAttribute('alt', imgText['pic'+(i+1)+'.jpg']);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function(){
        displayedImage.setAttribute('src', this.getAttribute('src'));
    })
}

/*btn클릭 시 btn 안의 글자가 Darken이면 어둡게, 아니라면 밝게 하는 함수 */
btn.addEventListener('click', function(){
    if(btn.innerHTML == 'Darken'){
        textLight();
    }else{
        textDark();
    }
})

function textLight(){
    btn.innerHTML = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
}

function textDark(){
    btn.innerHTML = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)'
}



/* Wiring up the Darken/Lighten button */
