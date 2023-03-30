$(
  function(){
    $('#banner').slick({
      arrows:false,
      dots:true,
    });
   $(".product_slider").slick({
    slidesToShow:4,
    prevArrow:".arrows .left",
    nextArrow: '.arrows .right',
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]


    

  });
  $(".countdown").countdown("2023/01/31 11:00:00", function(e) {
   
      let time = e.strftime('%D days %H:%M:%S')
      $(' .countdown .days').html(e.strftime('%D'));
      $(' .countdown .hour').html(e.strftime('%H'));
      $(' .countdown .mint').html(e.strftime('%M'));
      $(' .countdown .sec').html(e.strftime('%S'));
    } );

    new VenoBox({
      selector: '.venobox',

    });
  
  $(".product_slide").slick({
    slidesToShow:4,
    prevArrow:".arrows .left",
    nextArrow: '.arrows .right',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]




  });
  

});