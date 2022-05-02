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