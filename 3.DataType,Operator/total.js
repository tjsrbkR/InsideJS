//예제코드 함수가 3-1이면 Example31 로 선언.
//3-1 자바스크립트의 기본 타입
function Exaple31(){
    let intNum = 10;
    let floatNum = 0.1;
    let singleQuoteStr = 'single quote string';
    let doubleQuoteStr = 'double quote string';
    let singlechar = 'a';
    let boollet = true;
    let emptylet;
    let nullLet = null;
    console.log(
        typeof intNum,
        typeof floatNum,
        typeof singleQuoteStr,
        typeof doubleQuoteStr,
        typeof singlechar,
        typeof boollet,
        typeof emptylet,
        typeof nullLet
    );
}
//3-2 자바스크립트 나눗셈 연산
function Example32(){
    let num = 5/2;
    console.log(num);
    console.log(Math.floor(num));
}
//3-3 자바스크립트 문자열 예제
function Exaple33(){
    let str = 'test';
    console.log(str[0],str[1],str[2],str[3],);
    str[0] = 'T'//소문자를 대문자로 변경?
    console.log(str[0]);// 결과는 t  한번 생성된 문자열은 읽기만 가능. 수정 불가.
}
//3-4 null타입 변수 체크
function Example34(){
    let nullLet = null;
    console.log(typeof nullLet === null);
    console.log(nullLet === null);
}
//3-5 Object 생성자 함수를 통한 객체 생성
function Example35(){
    let foo = new Object();
    foo.name = "foo";
    foo.age = "30";
    foo.gender = "male";
    console.log(typeof foo);
    console.log(foo);
}
//3-6 객체 리터럴 방식으로 객체 생성
function Example36(){
    let foo = { 
        name:"foo",
        age : "30",
        gender:"male"
    };
    console.log(typeof foo);
    console.log(foo);
}
//3-7 객체의 프로퍼티 접근하기
function Example37(){
    let foo = { 
        name:"foo",
        major : "computer science"
    };
    console.log(foo.name);
    console.log(foo["name"]);
    console.log(foo.nickname);
    foo.major = "electronics engineering";
    console.log(foo.major);
    console.log(foo["major"]);


    foo.age = 30;
    console.log(foo.age);

    foo["full-name"] = "foo bar";
    console.log(foo["full-name"]);
    console.log(foo.full-name);
    console.log(foo.full);
    console.log(name);

}
//3-8 for in 문을 통한 객체 프로퍼티 출력
function Example38(){
    let foo = {
        name : "foo",
        age : "30",
        major : "coumputer science"
    };
    let prop;
    for(prop in foo){
        console.log(prop, foo[prop]);
    }
}
//3-9 동일한 객체를 참조하는 두 변수 objA와 objB
function Example39(){
    let objA = {
        val : 40
    };
    let objB = objA; 
    console.log(objA.val);
    console.log(objB.val);


    objB.val = 50;
    console.log(objA.val);
    console.log(objB.val);
}
//3-10 기본 타입과 참조 타입의 비교연산 

function Example310(){
    let a = 100;
    let b = 100;
    let objA = {value : 100};
    let objB = {value : 100};
    let objC = objB;

    console.log(a == b);
    console.log(objA == objB); //false 이유는? 다른 객체지만 같은 형태의 프로퍼티 값을 가지고 있다. 객체와 같은 참조 타입의 경우는 참조값이 같아야 true
    console.log(objB == objC);
}
//3-11 call by value 와 call by reference 차이
function Example311(){
    let a = 100;
    let objA = {value : 100};
    function changeArg(num, obj){
        num = 200;
        obj.value = 200;
        console.log(num);
        console.log(obj);
    }
    changeArg(a,objA);
    console.log(a);
    console.log(objA);
}
//3-12 객체 생성 및 출력
function Example312(){
    let foo = {
        name : "foo",
        age : 30
    };
    console.log(foo.toString()); 
    console.log(foo);
}
//3-13 배열 리터럴을 통한 배열 생성
function Example313(){
    let colorArrr = ["orange","red","yellow","blue"];
    console.log(colorArrr[0]);
    console.log(colorArrr[1]);
    console.log(colorArrr[4]);
}
//3-14 배열 요소의 동적 생성
function Example314(){
    let emptyArr = [];
    console.log(emptyArr[0]);
    emptyArr[0] = 100;
    emptyArr[3] = "eight";
    emptyArr[7] = true;
    console.log(emptyArr);
    console.log(emptyArr.length);
}
//3-15 배열의 length 프로퍼티 변경
function Example315(){
    let arr = [];
    console.log(arr);
    arr[0] = 0;
    arr[100] = 100;
    console.log(arr.length);
}
//3-16 배열의 length 프로퍼티의 명시적 변경
function Example316(){
    let arr = [0,1,2];
    console.log(arr.length);

    arr.length = 5;
    console.log(arr);
    arr.length = 2;
    console.log(arr);
    console.log(arr[2]);
}
//3-17 push() 메서드와 length 프로퍼티 
function Exaple317(){
    let arr= ["zero","one","two"];
    arr.push("three");
    console.log(arr);
    arr.length = 5;
    arr.push("five");
    console.log(arr);
}
//3-18 배열과 객체의 유사점과 차이점
function Example318(){
    let colorsArray = ["orange","yellow","red"];
    console.log(colorsArray[0]);
    console.log(colorsArray[1]);
    console.log(colorsArray[2]);

    let colorsObj = {
        "0" : "orange",
        "1" : "yellow",
        "2" : "red"
    };

    console.log(colorsObj[0]);
    console.log(colorsObj[1]);
    console.log(colorsObj[2]);

    console.log(typeof colorsArray);
    console.log(typeof colorsObj);

    console.log(colorsArray.length);
    console.log(colorsObj.length);
    colorsArray.push("blue");
    colorsObj.push("s");
}