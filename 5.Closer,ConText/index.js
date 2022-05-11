//5-1 \
//스코프란? 스코프란?
// 👉 식별자 접근 규칙에 따른 유효 범위
// 스코프의 정의는 “식별자 접근 규칙에 따른 유효 범위”이다. 
// (Scope)란 ‘변수에 접근할 수 있는 범위’ EX 지역변수,전역변수  = > 지역스코프,전역스코프
function Example51(){
    console.log("this is global context");
    function ExContext1(){
        console.log("this is ExContext1");
    }
    function ExContext2(){
        ExContext1();
        console.log("this is ExContext2");
    }
    ExContext2();
}
//5-2
function Example52(){
    function execute(param1,param2){
        let a = 1, b = 2;
        function Puc(){
            return a + b;
        }
        return param1 + param2 + Puc();
    }
    execute(3,4);
}
//5-3 
function Example53(){
    let a = 1;
    let b = 2;
    console.log(a);
    console.log(b);
}
//5-4
function EXample54(){
    let a = 1;
    let b = 2;
    function punc() {
        let a = 10;
        let b = 20;
        console.log(a);
        console.log(b);
    }
    punc();
    console.log(a);
    console.log(b);
}
//5-5
function Example55(){
    let value = "value1";
    function printFuc(){
        let value = "value2";
        function printvalue(){
            return value;
        }
        console.log(printvalue());
    }
    printFuc()
}
//5-6
function Example56(){
    let value = "value1";
    function printvalue(){
        return value;
    }
    function printFuc(punc){
        let value = "value2";
        console.log(punc());
    }
    printFuc(printvalue);
}
//5-7 클로저의 개념
// 클로저란? 클로저는 함수를 지칭하고 또 그 함수가 선언된 환경과의 관계라는 개념이 합쳐진것이다.
function Example57(){
    function outerFunc(){
        let x = 10; 
        let innerFunc = function () {console.log(x);}
        return innerFunc;
    }
    let inner = outerFunc();
    inner();
}
//5-8
function Example58(){
    function outerFunc(arg1,arg2){
        let local = 8;
        function innerFunc(innerArg){ //innerArg에 exam1의 매개변수 값이 들어가는데 이해가 안됨
            console.log((arg1+arg2)/(innerArg + local));
        }
        return innerFunc;
    }
    let exam1 = outerFunc(2,4);
    exam1(2);
}

//5-9 
function Example59(){
    function helloFunc(){
        this.greeting = "hello";
    }
    helloFunc.prototype.call = function(Punc){
        Punc ? Punc(this.greeting) : this.Punc(this.greeting); //에러 책에선 에러 안남.. 
    }
    let userPunc = function(greeting){
        console.log(greeting);
    }

    let objHello = new helloFunc();
    objHello.Puc = userPunc;
    objHello.call();
}
//5-10 
function Example510(){
    function helloFunc(){
        this.greeting = "hello";
    }
    helloFunc.prototype.call = function(Punc){
        Punc ? Punc(this.greeting) : this.Punc(this.greeting); //에러 책에선 에러 안남.. 
    }
    let userPunc = function(greeting){
        console.log(greeting);
    }
    let objHello = new helloFunc();
    objHello.Puc = userPunc;
    objHello.call();


    function saySome(obj,method,name){
        return (function(greeting){
            return obj[method](greeting,name);
        });
    }
    function newObj(obj,name){
        obj.Punc = saySome(this,"who",name);
        return obj;
    }
    newObj.prototype.who = function(greeting,name){
        console.log(greeting + " " + (name || "everyone"));
    }
    let obj1 = new newObj(objHello, "zzoon");
}   
