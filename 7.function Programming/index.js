//7-1 자바스크립트 에서 함수형 프로그래밍
function Example71(){
    let f1 = function(input){
        let result = 1;
        return result;
    };
    let f2 = function(input){
        let result = 2;
        return result;
    };

    let f3 = function(input){
        let result = 3;
        return result;
    };
    let get_encrypted = function(punc){
        let str = "zoon";
        return function(){
            return punc.call(null,str);
        }
    }
    var encrypted_value = get_encrypted(f1)();
    console.log(encrypted_value);
    var encrypted_value = get_encrypted(f2)();
    console.log(encrypted_value);
    var encrypted_value = get_encrypted(f3)();
    console.log(encrypted_value);
}
//7-2-1 배열의 각 원소 총합 구하기
function Example72(){
    function sum(arr){
        let len = arr.length;
        let i = 0, sum = 0;
        for(; i<len; i++){
            sum+= arr[i];
        }
        return sum;
    }
    let arr = [1,2,3,4];
    console.log(sum(arr));
}
//7-2-2 배열의 각 원소를 모두 곱하기
function Example722(){
    function sum(arr){
        let len = arr.length;
        let i = 0, result = 1;
        for(; i<len; i++){
            result *= arr[i];
        }
        return result;
    }
    let arr = [1,2,3,4];
    console.log(sum(arr));
}
//7-2-3 함수형 프로그래밍
function Example723(){
    function reduce(punc,arr,memo){
        let len = arr.length,
        i=0,
        accum = memo;
        for(; i<len;i++){
            accum = punc(accum,arr[i]);
        }
        return accum;
    }

}
//7-2-4 
function Example724(){
    function reduce(punc,arr,memo){
        let len = arr.length,
        i=0,
        accum = memo;
        for(; i<len;i++){
            accum = punc(accum,arr[i]);
        }
        return accum;
    }

    let arr= [1,2,3,4];
    let sum = function(x,y){
        return x+y;
     }
    let multiply = function(x,y){
        return x*y;
    };
    console.log(reduce(sum,arr,0));
    console.log(reduce(multiply,arr,1));
}
//7-3-1 팩토리얼
function Example731(){
    function fact(num){
        let val = 1;
        for(let i = 2; i<=num; i++){
            val = val *i;
            return val;
        };
        return val;
    }
    console.log(fact(10));
}
//7-3-2 재귀호출
function Example732(){
    function fact(num){
        if (num == 0) return 1;
        else return num* fact(num-1);
    }
    console.log(fact(5));
}
//7-3-3 연산 결과를 캐시에 저장하여 사용할수 있는 함수
function Example733(){
    let fact = function(){
        let cache = {"0":1};
        let punc = function(n){
            let result = 0;

            if(typeof(cache[n]) === "number"){
                result = cache[n];
            }
            else { 
                result = cache[n] = n * punc(n-1);
            }
            return result;
        }
        return punc;
    }();
    console.log(fact(10));
    console.log(fact(20));
}
//7-4 피보나치 수열
function Example74(){
    let fibo = function(){
        let cache = {"0" : 0, "1" : 1};

        let punc = function(n){
            if(typeof(cache[n]) === "number"){
                result = cache[n]; 
            }
            else {
                result = cache[n] = punc(n-1) + punc(n-2);
            }
            return result;
        }
        return punc;
    }();
    console.log(fibo(10));
}
//7-5 팩토리얼과 피보나치 수열을 계산하는 함수를 인자로 받는 함수
function Example75(){
    let cacher = function(cache,punc){
        let calculate = function(n){
            if(typeof(cache[n]) === "number"){
                result = cache[n];
            }
            else{
                result = cache[n] = punc(calculate,n);
            }
            return result;
        }
        return calculate;
    };

}
//7-6 7-5를 활용한 예시
function Example76(){
    let cacher = function(cache,punc){
        let calculate = function(n){
            if(typeof(cache[n]) === "number"){
                result = cache[n];
            }
            else{
                result = cache[n] = punc(calculate,n);
            }
            return result;
        }
        return calculate;
    };

    let fact = cacher({"0" :1}, function (punc,n){
        return n * punc(n-1);
    });

    let fibo = cacher({"0" : 0}, function(punc,n){
        return punc(n-1) + punc(n-2);
    });
    console.log(fact(4));
    console.log(fact(5));
    
}
//7-7 커링 (커링 이란? 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고, 나머지를 인자로 받는 새로운 함수)
function Example77(){
    function calculate(a,b,c){
        return a*b+c;
    }
    function curry(punc){
        let args = Array.prototype.slice.call(arguments,1);
        
        return function(){
            return punc.apply(null. args.concat(Array.prototype.slice.call(arguments)));
        }
    }
    let new_punc1 = curry(calculate,1);
    console.log(new_punc1(2,3));
    let new_punc2 = curry(calculate,1,3);
    console.log(new_punc2(3));
}
//7-8 calculate 함수의 첫번째 인자와 세번째 인자를 고정하는 함수
function Example78(){
    function calculate(a,b,c){
        return a*b+c;
    }
    function curry2(punc){
        let args = Array.prototype.slice.call(arguments,1);
        
        return function(){
            let arg_idx = 0;
            for(let i =0; i<args.length && arg_idx < arguments.length; i++)
                if(args[i] === undefined)
                args[i] = arguments[arg_idx++];
                return punc.apply(null, args);
            
        }
    }
    let new_punc = curry2(calculate,1,undefined,4);
    console.log(new_punc(3)); 
}

const ary = [1,2,3,4,5,"1"];
Array.prototype.push.call(ary,"3"); //Array.prototype 메서드를 사용 했으면 뒤에 .call 붙여야 호출 가능 하다 ex) Array.prototype.slice.call(1,3);
console.log(ary);