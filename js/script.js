$(document).ready(function(){

    //메인 메뉴 호버
    $('.main>li').hover(function(){
      if($(this).find('i').hasClass('ri-arrow-down-s-line')){
         $(this).find('i').removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
      }else{
         $(this).find('i').removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line');
      }
       $(this).find('.sub').fadeToggle(800);
    });
   
    //비디오 플레이
    $(".myvideo").on("mouseenter", function(){
        this.play();
    });
  
    $(".myvideo").on("mouseleave", function(){
       this.pause();
    });
  
    //비디오 팝업 열기
    $(".myvideo-btn").on("click", function(){
       const vdo = $(this).data("vdo");
    
       //비디오 소스 선택
       const $vdo = $("#viewvideo");
       const $source = $vdo.find('source');
  
       $source.attr("src", "vod/"+vdo);
       $vdo[0].load();
       //$vdo[0].play();

       $('.vdo-popup-back').fadeIn(400); //팝업 열기
    });

    //close 버튼 눌러서 닫기
    $('.close').click(function(){
        $('.vdo-popup-back').fadeOut(500);
    })

    // 닫기 버튼 클릭 시 팝업 닫기(개인)
    // $(".ri-close-fill").on("click", function(){
    //     $('.vdo-popup-back').fadeOut(400); // 팝업 닫기
    // });

    //overlaㅛ된 바탕화면 눌러서 닫기
    $('.vdo-popup-back').click(function(e){
        if($(e.target).is('#vdo-bavk')){
            $(this).fadeOut(500);
        }
    });


  });