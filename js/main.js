$(document).ready(function () {

    //공지사항 작업



    //메뉴내비게이션 클릭 후 이동 작업
    $(".menu li:nth-of-type(1)").click(function (event) {
        event.preventDefault();
        x = $(this).attr("href");
    });





    //모달작업
    $(".menu li:nth-of-type(3)").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });

    //메뉴 클릭 시 해당 카테고리로 이동

    $(".logo img").eq(0).on("click", function () {
        $("body,html").stop().animate({ "scrollTop": 0 },700);
    });

    $(".menu li").eq(0).on("click", function () {
        $("body,html").stop().animate({ "scrollTop": 550 },1500);
    });

    $(".menu li").eq(1).on("click", function () {
        $("body,html").stop().animate({ "scrollTop": 1000 },1500);
    });

    //공지사항
    $(".n1").mouseover(function () {
        $(this).find(".bris").stop().slideDown(1500);
    });
    $(".n1").mouseout(function () {
        $(this).find(".bris").stop().slideUp(500);
    });


    $(".n2").mouseover(function () {
        $(this).find(".bris2").stop().slideDown(1500);
    });
    $(".n2").mouseout(function () {
        $(this).find(".bris2").stop().slideUp(500);
    });


    $(".n3").mouseover(function () {
        $(this).find(".bris3").stop().slideDown(1500);
    });
    $(".n3").mouseout(function () {
        $(this).find(".bris3").stop().slideUp(500);
    });


    $(".n4").mouseover(function () {
        $(this).find(".bris4").stop().slideDown(1500);
    });
    $(".n4").mouseout(function () {
        $(this).find(".bris4").stop().slideUp(500);
    });



    //공지사항 메뉴 클릭 시 밑으로 슬라이드 
    //     $(function() {
    // 
    //         $("h1").on("click", function() {
    //     
    //             $(".bris").slideUp();   // id가 "divBox"인 요소를 올라가면서 사라지게 함.
    //         });
    //     
    //         $("h1").on("click", function() {
    //     
    //             $(".bris").slideDown(); // id가 "divBox"인 요소를 내려오면서 나타나게 함.
    //         });
    //     });

    //x버튼 클릭 시 슬라이드 닫기

    // $('.n_btn').click(function(){
    //     if( !$('.bris').has(e.target).length ) $('.bris').hide();
    // });

    // $(document).ready(function () {
    //     // memu 클래스 바로 하위에 있는 a 태그를 클릭했을때
    //     $(".bris i").click(function () {
    //         // 현재 클릭한 태그가 a 이기 때문에
    //         // a 옆의 태그중 ul 태그에 hide 클래스 태그를 넣던지 빼던지 한다.
    //         $(this).next(".bris").toggleClass("slideUp");
    //     });
    // });


    //
});