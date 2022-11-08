### Learn Javascript
**모르는 것 정리**

* .at() : 음수일 수도 있는 특정 인덱스의 문자를 읽는 메소드
<br>
const language = "JavaScript";  
language.at(0); // "J"  
language.at(1); // "a"  
language.at(-1); // "t"  
language.at(-2); // "p"  

* .substring(시작인덱스, 가져올 갯수) : 문자 중 일부를 가져오는 메소드  
<br>
someString.substring(indexStart, indexEnd)

* 템플릿 문자열 ``(백틱) 은 보간을 지원한다. 이는 문자열에 변수 ${변수명}를 쓰고 그 값을 얻을 수 있음을 의미한다.