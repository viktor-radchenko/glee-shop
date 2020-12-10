$(function () {
  // Активация бургер меню
  $(".menu__btn, .menu a").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu").toggleClass("menu--active");
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__item").toggleClass("menu__item--active");
  });

  $(".filter__range-input").ionRangeSlider({
    onStart: function (data) {
      $(".filter__range-min").text(data.from);
      $(".filter__range-max").text(data.to);
    },
    type: "double",
    min: 0,
    max: 1000,
    from: 100,
    to: 500,
    prefix: "$",
    step: 10,
    onChange: function (data) {
      $(".filter__range-min").text(data.from);
      $(".filter__range-max").text(data.to);
    },
  });

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

  $(".filter__recent-star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg:
      '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">' +
      '<path fill="d6d6d6" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">' +
      "</path>" +
      "</svg>",
    spacing: "8px",
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
