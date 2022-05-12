//6-1 클래스,생성자,메서드
function Example61(){
    function Person(arg){
        this.name = arg;
        this.getName = function(){
            return this.name;
        }
        this.setName = function(value){
            this.name = value; 
        }
    }
    let me = new Person("zzoon");
    console.log(me.getName());
    me.setName("iamhjoo");
    console.log(me.getName());
}
//6-2) 6-1에서 생긴 중복되는 영역 문제 해결 예제
function Example62(){
    function Person(arg){
        this.name = arg;
    }
    Person.prototype.getName = function(){
        return this.name;
    }
    Person.prototype.setName = function(){
        return this.name = value;
    }
    let me = new Person("me");
    let you = new Person("you"); 
    console.log(me.getName);
    console.log(you.getName);
}
//6-3 프로토타입 객체에 정의한 후, new로 생성한 객체에서 접근
function Example63(){
    Function.prototype.method = function(name, punc){
        this.prototype[name] = punc;
    }
    function Person(arg){
        this.name = arg;
    }
    Person.method("setName", function(value){
         this.name = value;
    });
    Person.method("getName", function(){
        return this.name;
    });
    let me = new Person("me");
    let you = new Person("you");
    console.log(me.getName);
    console.log(you.getName);
}
//6-4 프로토타입을 이용한 상속
function Example64(){
    function create_object(o){
        function F(){}
        F.prototype = o;
        return new F(); 
    }
}

//6-5 176P
function Example65(){
    let Person = {
        name : "zzoon",
        getName : function(){
            return this.name;
        },
        setName : function(arg){
            this.name = arg;
        } 
    };
    function create_object(o){
        function F(){}
        F.prototype = o;
        return new F();
    }
    let student = create_object(Person);
    student.setName("me");
    console.log(student.getName());
}
Example65();