$(document).ready(function () {
  $(".autoplay").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#next").click(function () {
    $(".autoplay").slick("slickNext");
  });
  $("#prev").click(function () {
    $(".autoplay").slick("slickPrev");
  });
});
