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

    lottie.loadAnimation({
      container: document.getElementById(index), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'anim/'+index+'.json' // the path to the animation json
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
    });
  });
});
