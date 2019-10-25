$( document ).ready(function() {

  $( "a.logo, .scrollDown" ).click(function( event ) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });


  //header

  lottie.loadAnimation({
  container: document.getElementById("graphics"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'anim/graphics.json' // the path to the animation json
  });

  lottie.loadAnimation({
  container: document.getElementById("logo"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'anim/logo.json' // the path to the animation json
  });




  //This is for the background color once you click through
  $(".emotionData").each(function (index){
    // scale = chroma.scale(['#f5c669', '#e97268',  '#ae49be', '#7fe1db']);
    scale = chroma.scale(['#FF8A76', '#E94E3E',  '#B48C4E', '#B67102', '#04C957', '#00B3C8']);

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


  $(".emotionData").hide();

//individual cards
  $( ".hoverable .emotion" ).each(function( index ) {


    //this is for the background color on the index
    scale = chroma.scale(['#FF8A76', '#E94E3E',  '#B48C4E', '#B67102', '#04C957', '#00B3C8']);

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


    var cardAnimation = {
      container: document.getElementById(index), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      name: "cardAnim",
      path: 'anim/'+index+'.json' // the path to the animation json
    }
    lottie.loadAnimation(cardAnimation);



    $(this).hover(function(){
      lottie.play("cardAnim");

    },
    function() {
      lottie.stop("cardAnim");
    });


    // $(this).hover(function(index){
    //
    // });

  });

  $(".hoverable .emotion").on('mousemove', function(e){
    $('.hoverable .card').css({
       left:  e.pageX,
       top:   e.pageY
    });
  });



    // $(".wordList").clone().appendTo(".tableOfContents");

  // $(".tableOfContents .wordList .emotion").each(function (index){
  //   var gridAnimation = {
  //     container: document.getElementById(index), // the dom element that will contain the animation
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: 'anim/'+index+'.json' // the path to the animation json
  //   }
  //   lottie.loadAnimation(gridAnimation);
  //   lottie.play();
  //
  //   console.log(index);
  //
  //   //this is for the background color on the index
  //   scale = chroma.scale(['#fff', '#000']);
  //
  //   const range = [0, 49];
  //   const value = index;
  //   const normal = norm(value, range[0], range[1]); // Return 0.15
  //
  //   function norm(value, min, max) {
  //     return (value - min) / (max - min);
  //   }
  //
  //   // Let's check the result in the console.
  //   // console.log(normal);
  //
  //   $(this).css("background", scale(normal));
  //
  //
  // });


    // $(".tableOfContents .emotionData").show();



  $(".emotion").each(function(index){

    $(this).click(function(){
      // console.log(index);
        $("#emotionData-"+index).toggle();

        $("#header-"+index).toggleClass("showHeader");

        $("body").toggleClass("noScroll");
    });
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $(".emotionData").show();

    $(".emotion").each(function(index){
    $(this).click(function(){
      // console.log(index);
        $("#emotionData-"+index).show();

        $("#header-"+index).removeClass("showHeader");

        $("body").removeClass("noScroll");
    });
      });

      lottie.play("cardAnim");


        $(".hoverable .emotion").on('mousemove', function(e){
          $('.hoverable .card').css({
             left:  0,
             top:   0
          });
        });
  }


});
