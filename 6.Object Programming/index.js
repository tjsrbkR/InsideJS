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

//6-6 extend() 함수를 추가한 활용 
function Example66(){
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
    function extend(obj,prop){
        if(!prop) {prop = obj; obj = this;}
        for(let i in prop) obj[i] = prop[i];
        return obj;
    }
    let student = create_object(Person);
    let added = {
        setAge : function(age){
            this.age = age
        },
        getAge : function(){
            return this.age;
        }
    };
    extend(student,added);
    student.setAge(25);
    console.log(student.getAge());
}
//6-7 클래스 기반 상속
function Example67(){
    function Person(arg){
        this.name = arg;
    }
    Person.prototype.setName = function(value){
        this.name = value;
    };
    Person.prototype.getName = function(){
        return this.name;
    };
    function Student(arg){

    }
    let you = new Person("iamhoo");
    Student.prototype = you;
    let me = new Student("zzoon");
    me.setName("zzoon");
    console.log(me.getName());
}
//6-8 두 클래스의 프로토타입 사이에 중개자 만들기
function Example68(){
    function Person(arg){
        this.name = arg;
    }
    Function.prototype.method = function(name,punc){
        this.prototype[name] = punc;
    }
    Person.method("setName", function(value){
        this.name = value;
    });
    Person.method("getName", function(){
        return this.name;
    });
    function Student(arg){
    }
    function F(){};
    F.prototype = Person.prototype;
    Student.prototype = new F();
    Student.prototype.consturctor = Student; 
    Student.super = Person.prototype;
    let me = new Student();
    me.setName("zzoon");
    console.log(me.getName());

}
//6-9 캡슐화
function Example69(){
    let Person = function(arg){
        let name = arg ? arg:"zzoon";
        this.getName = function(){
            return name;
            
        }
        this.setName = function(){
            name = arg;
        }
    };
    let me = new Person();
    console.log(me.getName());
    me.setName("iamhoo");
    console.log(me.getName());
    console.log(me.name);
}
//6-10 조금더 깔끔하게 다듬기
function Example610(){
    let Person = function(arg){
        let name = arg ? arg :"zzoon";
        return {
            getName : function(){
                return name;
            },
            setName : function(){
                name = arg; 
            }
        };
    }
    let me = Person();
    console.log(me.getName);

}
//6-11 접근하는 private 멤버가 객체나 배열이면 사용자가 변경할수 있다.
function Example611(){
    let ArrCreate = function(arg){
        let arr = [1,2,3];
        return{
            getArr : function(){
                return arr;
            }
        };

    }
    let obj = ArrCreate();
    let arr = obj.getArr();
    arr.push(5);
    console.log(obj.getArr());  
}