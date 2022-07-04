console.log(window);

function f01(){
    result = window.open("http://192.168.140.95:5500/new.html", 'naver', 'width=300px', 'height=300px', 'resizable=no');
    setTimeout(() => {
        console.log(result.document);
        result.document.getElementById('v').value = '부모가 보낸 값';
    }, 100);
    //(url, 창이름, 너비(크롬x), 높이(크롬x), 창크기 조절..인데 크롬이랑 엣지에선 안됨,,,,)
    //window method는 브라우저에 따라서 다르기 때문에 알아보고 해라....
    //창이름 : 같은 이름이면 같은 창에서 열린다...다르면 새로운 창에서 오픈
}

function f02(){
    window.open("https://www.google.com",'zzz123312', 'width=300px', 'height=300px', 'resizable=no');
}

function sendValue(){
    
}

function sayHello(){
    window.setTimeout(function(){
        console.log('hello');
    },2000);
}

function sayBye(){
    window.setInterval(()=>{
        console.log('bye');
    }, 2000);
}

function locationTest(){
    //객체의 모든 프로퍼티 출력
    for(var k in location){
        console.log(`${k} : ${location[k]}`);
    }
}