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
// 클로저란? 클로저는 내부 함수가 정의될 떄 외부 함수의 환경을 기억하고 있는 내부 함수를 말합니다
// 이미 생명주기가 끝난 외부 함수의 변수를 참조하는것을 클로저 라고 한다.
// 사용 하는 이유 => 전역 변수의 남용을 막을 수 있고 변수 값을 은닉하는 용도로도 사용할 수 있다. 
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
//5-11 함수의 캡슐화
function Example511(){
    let buffAr = [
        "I am",
        "",
        ". I live in",
        "",
        ". I \"am",
        "",
        " years old.",
    ]; 
    function getCompletedStr(name, city , age){
        buffAr[1] = name;
        buffAr[2] = city;
        buffAr[3] = age;
        
        return buffAr.join("");
    }
    let str = getCompletedStr("zzoon", "seoul", 16); 
    console.log(str);
}
//5-12 
function Example512(){
    let buffAr = [
        "I am",
        "",
        ". I live in",
        "",
        ". I\"am ",
        "",
        " years old.",
    ]; 
    function getCompletedStr(name, city , age){
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;
        
        return buffAr.join("");
    }
    let str = getCompletedStr("zzoon", "seoul", 16); 
    console.log(str);
}
//5-13 setTimeout 함수로 호출했을때
function Example513(){
    function callLater(obj,a,b){
        return (function(){
            obj["sum"] = a + b;
                console.log(obj["sum"]);
        });
    }
    let sumObj = {
        sum : 0
    };
    let punc = callLater(sumObj,1,2);
    setTimeout(punc,500);
}
//5-14 클로저의 프로퍼티 값이 쓰기 가능하므로 그 값이 여러번 호출로 하상 변할 수 있음에 유의 해야 한다 
function Example514(){
    function outerFunc(argNum){
        let num = argNum;
        return function(x){
            num += x;
            console.log("num : " + num); 
        }
    }
    let exam = outerFunc(40);
    exam(5); //return function(x) 여기서 x값에 5가 들어감. 결과는 45
    exam(-10);//위 함수에서 num 의 값이 45로 됨으로서 x값에 -10이 들어감. 결과는 35 
}
//5-15 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우도 있다.
function Example515(){
    function punc(){
        let x = 1;
        return {
            punc1 : function(){console.log(++x);},
            punc2 : function(){console.log(-x);}
        };
    }
    let exam = punc();
    exam.punc1();
    exam.punc2();
}
//5-16 루프 안에서 클로저를 활용할때는 주의하자
function Example516(){
    function countSeconds(howmany){
        for(let i = 1; i<=howmany; i++){
            setTimeout(function (){
                console.log(i);
            }, i *1000);
        }
    }
    countSeconds(3);
}Example516();