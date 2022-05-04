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
//4-15 window.onload 이벤트 핸들러 예제 코드
function Example415(){
    window.onload = function(){
        alert("이것은 콜백 함수 이다.")
    }
}
//4-16 즉시 실행 함수 예제
function Example416(){
    (function (name){
        console.log("이것은 즉시 실행 함수 이다." + name);
    })("foo");
}
//4-17 제이쿼리 에서 사용된 즉시 실행 함수
function Example417(){
    (function ( window, undefined){

    })(window);
}
//4-18 내부함수 예제
function Example418(){
    function parent(){
        let a = 100;
        let b = 200;
        function child(){
            let b = 300; 
            console.log(a);
            console.log(b);
        }
        child();
    }
    parent();
    child(); // 에러 parent 함수 내부에서는 함수를 호출 할수 있으나 parent 함수 밖에서는 내부함수인 child를 호출할수 없음.
}
//4-19 함수 스코프 외부에서 내부 함수 호출하는 예제
function Example419(){
    function parent(){
        let a = 100;
        let child = function(){
            console.log(a);
        }
        return child;
    }
    let inner = parent();
    inner();  
}
//4-20 자신을 재정의 하는 함수 예제
function Example420(){
    let self = function(){
        console.log("a");
        return function (){
            console.log("b");
        }
    }
    self = self();
    self();
}
//4-21 함수 형식에 맞춰 인자를 넘기지 않더라도 함수 호출이 가능함을 나타내는 예제
function Example421(){
    function fig(arg1, arg2){
        console.log(arg1, arg2);
    }
    fig();
    fig(1);
    fig(1,2);
    fig(1,2,3);
}
//4-22 arguments 객체 예제 
function Example422(){
    function add(a,b){
        console.dir(arguments);
        return a+b;

    }
    console.log(add(1));
    console.log(add(1,2));
    console.log(add(1,2,3));
    console.log(add(1,2,3,4));
    

}
//4-23 메서드 호출 사용시 this 바인딩
function Example423(){
    let myObject = {
        name : "foo",
        sayName: function(){
            console.log(this.name);
        }
    };

    let otherObject = {
        name : "bar"
    };

    otherObject.sayName = myObject.sayName;
    myObject.sayName();
    otherObject.sayName();
}
//4-24 전역 객체와 전역 변수의 관계를 보여주는 예제 
function Example424(){
    let foo = "im foo"; 
    console.log(foo);
    console.log(window.foo);
}
//4-25함수를 호출할때 this 바인딩을 보여주는 예제
function Example425(){
    let test = "this is test";
    console.log(window.test);
    let sayFoo = function(){
        console.log(this.test);
    }
    sayFoo();
}
//4-26 내부 함수의 this 바인딩 동작을 보여주는 예제
function Example426(){
    let value = 100;

    let myObject = {
        value : 1,
        punc : function(){
            this.value += 1; 
            console.log ("punc1() 호출. this.value : " + this.value);
            punc2 = function (){
                this.value += 1;
                console.log ("punc2() 호출. this.value : " + this.value);
                punc3 = function(){
                    this.value += 1;
                    console.log ("punc3() 호출. this.value : " + this.value);
                    
                }
                punc3();
            }
            punc2();
        }
    };
    myObject.punc();
}

//4-27 내부 함수의 this 바인딩 문제를 해결한  예제
function Example426(){
    let value = 100;

    let myObject = {
        value : 1,
        punc : function(){
            let that = this; 
            console.log ("punc1() 호출. this.value : " + this.value);
            punc2 = function (){
                this.value += 1;
                console.log ("punc2() 호출. this.value : " + that.value);
                punc3 = function(){
                    this.value += 1;
                    console.log ("punc3() 호출. this.value : " + that.value);
                }
                punc3();
            }
            punc2();
        }
    };
    myObject.punc();
}

//this 이해가 잘 안되서 연습.
function practice(){
    // let apple = "독이 든 사과";
    // let apple2 = {
    //     apple:"맛있는 사과",
    //     eatapple : eatAppleFn
    // };
    // function eatAppleFn() {	
    //     console.log(`백설공주가 ${this.apple}를 먹습니다.`);    
    // }
    // apple2.eatAppleFn();
    // apple.eatAppleFn();

    // var apple = '독이 든 사과';
    // var home = {
    // apple: '맛있는 사과',
    // eatApple: eatAppleFn
    // }

    // function eatAppleFn() {	
    // console.log(`백설공주가 ${this.apple}를 먹습니다.`);    
    // }

    // // (1) 객체 method 호출
    // home.eatApple(); // 백설공주가 맛있는 사과를 먹습니다.

    // // (2) 함수 직접 호출
    // eatAppleFn(); // 백설공주가 독이 든 사과를 먹습니다.
    var home2 = {
        apple: '독이든 사과',
        eatApple: eatAppleFn
     }
    var home = {
        apple: '맛있는 사과',
        eatApple: eatAppleFn
    }

    function eatAppleFn() {	
    console.log(`백설공주가 ${this.apple}를 먹습니다.`);    
    }

    // (1) 객체 method 호출
    home.eatApple(); // 백설공주가 맛있는 사과를 먹습니다.

    // (2) 함수 직접 호출
    home2.eatApple(); // 백설공주가 독이 든 사과를 먹습니다.
    
}
practice();