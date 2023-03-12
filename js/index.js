console.log("Your index.js file is loaded correctly!");

$(".explore-process").on("click", function () {
  if ($(window).scrollTop() !== $("#process").offset().top) {
    $("html, body").animate({ scrollTop: $("#process").offset().top }, 1000);
  }
});

$(".scroll-to-overview").on("click", function () {
  if ($(window).scrollTop() !== $("#overview").offset().top) {
    $("html, body").animate({ scrollTop: $("#overview").offset().top }, 1000);
  }
});

$(".scroll-to-process").on("click", function () {
  if ($(window).scrollTop() !== $("#process").offset().top) {
    $("html, body").animate({ scrollTop: $("#process").offset().top }, 1000);
  }
});

$(".scroll-to-conclusion").on("click", function () {
  if ($(window).scrollTop() !== $("#conclusion").offset().top) {
    $("html, body").animate({ scrollTop: $("#conclusion").offset().top }, 1000);
  }
});
