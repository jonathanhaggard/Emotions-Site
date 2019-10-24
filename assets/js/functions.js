$( document ).ready(function() {

  $(".emotionData").hide();

  $( ".emotion" ).each(function( index ) {




    $(this).append("<div class=" + "card" + "></div>");

    $(".card").each(function (index){
      $(this).attr('id', index );
    });
    $(".emotion").each(function (index){
      $(this).attr('id', "emotion-"+index );
    });
    $(".emotionData").each(function (index){
      $(this).attr('id', "emotionData-"+index );
    });

    $("h1").each(function (index){
      $(this).attr('id', "header-"+index );
    });


    var myAnimation = {
      container: document.getElementById(index), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'anim/'+index+'.json' // the path to the animation json
    }
    lottie.loadAnimation(myAnimation);

    $(this).hover(function(){
      lottie.play();
    },
    function() {
      lottie.stop();
    });


    // $(this).hover(function(index){
    //
    // });

  });

  $(document).on('mousemove', function(e){
    $('.card').css({
       left:  e.pageX,
       top:   e.pageY
    });
  });

  $(".emotion").each(function(index){

    $(this).click(function(){
      // console.log(index);
        $("#emotionData-"+index).toggle();

        $("#header-"+index).toggleClass("showHeader");

        $("body").toggleClass("noScroll");
    });
  });
});
