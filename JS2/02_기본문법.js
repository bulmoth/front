//1. 변수와 자료형
//전역변수 선언
str1 = '전역변수';

var str2 = '전역변수';  //함수 밖에 있으면 전역변수

//페이지가 모두 로드되면 자동으로 실행되는 함수 구현
window.onload = function(){
    var str1 = '지역변수';
    var str3 = '지역변수3';
    var str4;

    console.log(str1);          //지역
    console.log(window.str1);   //전역
    console.log(this.str1);     //전역, 근데 이건 되도록 쓰지 말기...

    console.log('--------------------');

    console.log(str2);          //전역
    console.log(window.str2);   //전역
    console.log(this.str2);     //전역

    console.log('--------------------');

    console.log(str3);          //지역
    console.log(window.str3);   //undefined
    console.log(this.str3);     //undefined

    console.log('--------------------');

    console.log(str4);          //undefined
    console.log(typeof(str4));   //undefined

    console.log('--------------------');

    //var, let, const
    //1) 중복 선언
    
    var num = 0;
    console.log(num);

    var num = 10;
    console.log(num);

    var num = 20;
    console.log(num);

    console.log('--------------------');

    let numLet = 10;
    console.log(numLet);

    // let numlet = 20;
    // console.log(numlet);

    numLet = 20;
    console.log(numLet);

    const numConst = 0;
    console.log(numConst);

    // const numConst = 10;
    // console.log(numConst);
    
    // numConst = 10;
    // console.log(numConst);

    //2) 유효 범위 (스코프)
    //- 함수 안에서 var 키워드로 선언된 변수는 함수 유효 범위를 갖는다.
    //- 함수 안에서 let, const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.

    if(true){
        var temp = 10;
        console.log("if문 안쪽 temp : " + temp);
    }
    console.log("if문 바깥쪽 temp : " + temp);
}//window.onload function end

//자료형 테스트
function typeTest(){
    let name = '심원용';//문자열
    let age = 20;//숫자
    let height=183.7;//숫자
    let check = false;//논리
    let food = ['치킨', '피자', '제육']//배역
    let user = {
        name : '심원용',
        age : 20,
        height : 183.7,
        weight : 88.8,
        food : ['치킨', '피자', '제육']
    };   //객체
    //함수
    let plus = function(a, b){
        return a+b;
    }

    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof height);
    console.log(typeof check);
    console.log(typeof food);
    console.log(typeof user);
    console.log(typeof plus);
}

//장제 형변환
function castingTest(){
    console.log('==========casting test==========')
    var result = 2 + '3';
    console.log(result);
    var result = 2 + Number('3');
    console.log(result);
    var result = String(2) + Number('3');
    console.log(result);
    var result = 2 + parseInt('3');
    console.log(result);
    var result = 2 + parseFloat('3');
    console.log(result);

}

//for in test
function forInTest(){
    let arr = ['apple', 'banana', 'tomato'];
    //for in
    for(let i in arr){
        console.log(i);
        console.log(arr[i]);
    }

    console.log('===================')

    //ES6 에 추가된 for문
    for(let x of arr){
        console.log(x);
    }
}