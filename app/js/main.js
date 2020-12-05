$(function () {
  $(".top-slider__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 10000,
  });

  $(".featured__item").hover(function () {
    $(this).find(".group-icons").toggleClass("group-icons--hover");
  });

  const featured = mixitup(".featured__items", {
    selectors: {
      control: ".featured__filter-btn",
    },
  });

  const newProducts = mixitup(".new-design__content", {
    selectors: {
      control: ".new-design__filter-btn",
    },
  });
});
