//예제코드 함수가 4-1이면 Example41 로 선언.

//4-1 예제 함수 선언문 방식
function EXample41(){
    function add (x,y){
        return x + y; 
    }
    console.log(add(3,4));
}
//4-2 add() 함수 생성 (함수 표현식 방식)

function Exaple42(){
    let add = function(x,y){
        return x + y ;
    }
    let plus = add;
    console.log(add(3,4));
    console.log(plus(5,6));
}
//4-3 기먕 함수 표현식의 함수 호출 방법
function Exaple43(){
    let add = function sum(x,y){
        return x + y;
    }
    console.log(add(3,4));
    console.log(sum(3,4));//오류! 함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근 불가능 
}
//4-4 함수 표현식 방식으로 구현한 팩토리얼 함수

function Exaple44(){
    let facrorialLet = function facrorial(n){
        if(n <= 1){
            return 1;
        }
        return n * facrorial(n-1); 
    }
    console.log(facrorialLet(3));// n값에 3을 대입. n값이 1보다 작으면 if문을 거치고 1을 반환, 3이기 때문에 if문을 거치지 않고 3 * (3-1) 을 반환한다.
    console.log(facrorial(3));//오류! 4-3 에러와 마찬가지 이다.

}
//4-5 생성자 함수를 이용한 add() 함수 생성
function Example45(){
    //책에선 매개변수 값을  'x','y', 'return x + y' 로 정의 되었다. 개발환경을 웹 스톰으로 사용하기 때문에 오류가 생긴것 같다.
    let add = new function(x,y){
        return x + y; 
    }
}

//4=6 함수 선언문 방식과 함수 호이스팅
function Example46(){
    add(2,3); 
    console.log(add(2,3));
    function add(x,y){
        return x + y; 
    }
    add(3,4);
    console.log(add(3,4));
}
//4-7 함수 표현식 방식과 함수 호이스팅
function Example47(){
    add(2,3); // 에러! add함수는 함수 표현식 형태로 정의되어 있어서 함수 호이스팅이 일어나지 않는다. 

    let add = function(x,y){
        return x + y; 
    }
    add(3,4);
}
//4-8 add()함수도 객체처럼 프로퍼티를 가질수 있다.
function Exaple48(){
    function add(x,y){
        return x + y;
    }
    add.result = add(3,2);
    add.status = 'OK';
    console.log(add.result);
    console.log(add.status);
}
//4-9 변수나 프로퍼티에 함수값을 할당하는 코드

function Exaple49(){
    let foo = 100;
    let bar = function (){return 100; };
    console.log(bar());
    let Obj = {};
    Obj.baz = function() {return 200;};
    console.log(Obj.baz());
}// 4-10 함수를 다른 함수의 인자로 넘긴 코드
function Example410(){
  let foo = function(func){
      func(); 
  }  
  foo(function(){
      console.log('function can be used as the argument'); 
  });
}
//4-11 함수를 다른 함수의 리턴값으로 활용한 코드 
function Example411(){

    let foo = function(){
        return function() {
            console.log('this function is the return value.')
        };
    };
    let bar = foo();
    bar();
}
//4-12 add 함수 객체 프로퍼티를 출력하는 코드
function Example412(){
    function add(x,y){
        return x + y;
    }
    console.dir(add);
}
//4-13 함수 객체의 length 프로퍼티
function Example413(){
    function func0(){

    }
    function func1(x){
        return x;
    }
    function func2(x,y ){
        return x + y;
    }
    function func3(x,y,z){
        return x + y + z;
    }
    console.log('func0.length - ' +  func0.length);
    console.log('func1.length - ' +  func1.length);
    console.log('func2.length - ' +  func2.length);
    console.log('func3.length - ' +  func3.length);
    
}
//4-14 함수 객체와 프로토타입 객체와의 관계를 보여주는 코드
function Example414(){
    function myFunction(){
        return true;
    }
    console.dir(myFunction.prototype);
    console.dir(myFunction.prototype.constructor);
}