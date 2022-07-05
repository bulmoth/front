// window.onload = function(){
        //     console.log("11111");
        // }
        // window.onload = function(){
        //     console.log("222222");
        // }

        // jQuery(document).ready(function(){
        //     console.log("제이쿼리 잘되니...");
        // });

        // jQuery(document).ready(function(){
        //     console.log("제이쿼리 잘되니...22222");
        // });

$(function () {
    console.log("제이쿼리 잘 되는지...");

    console.log($('h3'));
    
    //각 요소의 배경색 빨강으로 변경
    // const tempArr = $('h3');
    // for(let i=0;i<tempArr.length;i++){
    //     tempArr[i].style.backgroundColor = 'red';
    // }
    $('h3').css('backgroundColor','red');

    $('#target').css('backgroundColor', 'red');
    $('#target').css('width', '100px');
    $('#target').css('height', '100px');
});