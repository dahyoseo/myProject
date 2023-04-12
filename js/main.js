$(document).ready(function () {

    //공지사항 작업



    //메뉴내비게이션 클릭 후 이동 작업
    $(".menu li:nth-of-type(1)").click(function(event){
        event.preventDefault();
        x=$(this).attr("href");

//         $("html, body").stop().animate({})
// 

    });





    //모달작업
    $(".menu li:nth-of-type(3)").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });


});