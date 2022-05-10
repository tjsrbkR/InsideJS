//5-1 
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
    function printFuc(func){
        let value = "value2";
        console.log(func());
    }
    printFuc(printvalue);
}
