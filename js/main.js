const titleContainer = $(".pageContainer .title .more.two");
const title = $(".pageContainer .title .more.two span");
const title1 = $(".pageContainer .title .more.two span:eq(0)");
const title2 = $(".pageContainer .title .more.two span:eq(1)");
const pageContainer1 = $(".phoneContainer.toggle .right:eq(0)");
const pageContainer2 = $(".phoneContainer.toggle .right:eq(1)");

function removeClass() {
  title1.removeClass();
  title2.removeClass();
}

title.on("mouseenter", ({ target }) => {
  removeClass();
  const text = target.innerText;
  if (text === "耳机") {
    pageContainer2.removeClass("active");
    pageContainer1.addClass("active");
  } else {
    pageContainer1.removeClass("active");
    pageContainer2.addClass("active");
  }
  $(target).addClass("show");
});
