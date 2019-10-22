$( document ).ready(function() {

  $( ".emotion" ).each(function( index ) {



    // console.log( index + ": " + $( this ).text() );

    $(this).append("<div class=" + "card" + "></div>");

    $(".card").each(function (index){
      $(this).attr('id', index );



    });




    lottie.loadAnimation({
      container: document.getElementById(index), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'anim/'+index+'.json' // the path to the animation json
    });

    $(this).hover(function(index){

    });

  });

  $(document).on('mousemove', function(e){
    $('.card').css({
       left:  e.pageX,
       top:   e.pageY
    });
  });



});
