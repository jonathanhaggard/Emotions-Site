$( document ).ready(function() {
  var colorTest = chroma.scale(['yellow', '008ae5']);


  $(".emotionData").hide();

  $( ".emotion" ).each(function( index ) {

    scale = chroma.scale(['#f00', '#00f', '#0ff']);

    const range = [0, 49];
    const value = index;
    const normal = norm(value, range[0], range[1]); // Return 0.15

    function norm(value, min, max) {
      return (value - min) / (max - min);
    }

    // Let's check the result in the console.
    // console.log(normal);

    $(this).css("background", scale(normal));


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

  $(".emotionData").each(function (index){
    scale = chroma.scale(['#f00', '#00f', '#0ff']);

    const range = [0, 49];
    const value = index;
    const normal = norm(value, range[0], range[1]); // Return 0.15

    function norm(value, min, max) {
      return (value - min) / (max - min);
    }

    // Let's check the result in the console.
    // console.log(normal);

    $(this).css("background", scale(normal));
  });


});
