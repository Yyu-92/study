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

* 템플릿 문자열 ``(백틱) 은 보간을 지원한다. 이는 문자열에 변수 ${변수명}를 쓰고 그 값을 얻을 수 있음을 의미한다. 큰 숫자를 읽기 쉽게 만든다.

* 숫자 구분 기호'_' : 더 큰 숫자를 명확하게 나타낼 수 있다.  
<br>
let nb = 1_000; // equivalent to 1000

* Number.parseInt() :  숫자로 형변환
Math.round(2.6); // 3  
Math.floor(2.6); // 2  
Math.ceil(2.6); // 3  

* const로 정의된 배열은 내부의 요소를 추가, 삭제 할 수 있으므로 상수가 아니다. 그러나 다른 값에 다시 할당할 수 없으므로 항상 배열이 된다.
