window.onload = function(){
    const btn1 = document.getElementById('btn1'); //요소 담는건 보통 const...

    btn1.addEventListener('click',function(){
        let arr1 = new Array();
        let arr2 = new Array(3);
        let arr3 = new Array("애플", "삼성", "구글", "테슬라");
        let arr4 = ['일', '이', '삼', '사', '오'];
        let arr5 =
        [
            '심원용',
            20,
            183.7,
            true,
            ['음약감상', '독서', '꽃꽂이'],
            function(){
                console.log('배열안의함수 실행됨');
            },
            {}
        ];

        console.log(arr1);
        console.log(arr2);
        console.log(arr3);
        console.log(arr4);
        console.log(arr5);

        console.log('-----------');

        console.log(arr5[0]);
        console.log(arr5[1]);
        console.log(arr5[2]);
        console.log(arr5[3]);
        console.log(arr5[4]);
        console.log(arr5[5]);
        console.log(arr5[6]);

        var f = arr5[5];    //함수
        // console.log(f);
        f();

        console.log('------------')

        arr1[0] = '자바';
        arr1[1] = 'SQL';
        arr1[2] = 'FRONT';
        arr1[3] = 'web';

        console.log(arr1);

        console.log('------------')

        arr2[0] = '자바';
        arr2[1] = 'SQL';
        arr2[2] = 'FRONT';
        arr2[3] = 'web';

        console.log(arr2);

    }); //익명함수,,,  

    const btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', function(){
        var arr = [];
        arr[0] = 10;
        arr[1] = 222;
        arr[2] = 3;
        arr[3] = 444;
        arr[4] = 50;

        //sort 테스트
        // arr.sort(function(a,b){return b-a});

        //join 테스트
        // var result = arr.join('@');

        console.log(result);
    });
    
}//onload func


