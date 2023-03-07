const img1 = $(".footerContainer  div .img1");
const img2 = $(".footerContainer  div .img2");

setInterval(() => {
  if (img1.hasClass("imgShow")) {
    img1.removeClass("imgShow");
    img2.addClass("imgShow");
  } else {
    img2.removeClass("imgShow");
    img1.addClass("imgShow");
  }
}, 2000);
