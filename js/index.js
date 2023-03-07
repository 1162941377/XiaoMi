import { download, cart } from "./header.js";
import showSearchText from "./search.js";
import "./category.js";
import "./main.js";
import "./footer.js";

download();
cart();
showSearchText();

const showPng = $(".main .showPng");

$(window).resize(() => {
  if ($(window).width() < 1470) {
    showPng.css("width", "1226px");
  } else if ($(window).width() >= 1470) {
    showPng.css("width", "1470px");
  }
});
