//1. 이벤트 모델의 종류

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

//1) 고전 이벤트 모델
//한 개의 이벤트에는 한 개의 동작(이벤트 핸들러)만을 넣을 수 있다.
btn1.onclick = function(x){
    alert("고전 이벤트 모델을 이용한 처리");
    console.log(x);
    console.log(this);
    console.log(x.target);
    console.log(x.currentTarget);
}
//이벤트 제거
//btn1.onclick = null;

btn2.onclick = (x) => {
    alert("고전 이벤트 모델을 이용한 처리 (화살표 함수)");
    console.log(x);
    console.log(this);
    console.log(x.target);
    console.log(x.currentTarget);
}

//3) 표준 이벤트 모델
//하나의 이벤트에 여러 개의 동작을 걸 수 있다.
btn3.addEventListener('click', clickHandler);
btn3.addEventListener('mouseenter', function(){
    this.style.backgroundColor = 'red';
});

function clickHandler(){
    alert('표준 이벤트 모델을 이용한 처리');
}

btn3.addEventListener('click', function(){
    this.style.backgroundColor = 'blue';
});

//3. 태그별 기본적으로 가지고 있는 이벤트 제거
//1) 기본 이벤트 제거1
function pwdCheck(){
    const pwd1 = document.getElementById('pwd1').value;
    const pwd2 = document.getElementById('pwd2').value;

    if(pwd1 !== pwd2){
        alert('비밀번호가 일치하지 않습니다.');
        return false;
    }
}


//2) 기본 이벤트 제거2
const memberJoin = document.getElementById('memberJoin');

memberJoin.addEventListener('click',checkJoin);

function checkJoin(event){

    //사용자 아이디 가져와서
    const userId = document.getElementById('userId').value;

    //정규표현식 생성
    const temp = /^[a-zA-Z0-9]{5,12}$/;        //정규표현식은 슬래시 사이에다 넣어줘야함
    //정석은 new RegExp('정규표현식') 일케 쓰면 됨
    
    //정규표현식을 이용한 유효성 판단
    const result = temp.test(userId);

    if(!result){
        alert('회원가입 진행 안함');
        event.preventDefault(); //기본동작 막기(이벤트버블링 막기)
    }
}