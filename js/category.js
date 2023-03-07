const categoryLi = $(".categoryContainer .category li");
const categoryContainer = $(".categoryContainer .childrenList");
const categoryUl = $(".categoryContainer .category");
const category1 = $(".categoryContainer .childrenList:eq(0)");
const category2 = $(".categoryContainer .childrenList:eq(1)");
const category3 = $(".categoryContainer .childrenList:eq(2)");
const category4 = $(".categoryContainer .childrenList:eq(3)");
const category5 = $(".categoryContainer .childrenList:eq(4)");
const category6 = $(".categoryContainer .childrenList:eq(5)");
const category7 = $(".categoryContainer .childrenList:eq(6)");
const category8 = $(".categoryContainer .childrenList:eq(7)");
const category9 = $(".categoryContainer .childrenList:eq(8)");
const category10 = $(".categoryContainer .childrenList:eq(9)");

let chooseLi = "";
let checkLi = null;

function removeClass() {
  category1.removeClass("show");
  category2.removeClass("show");
  category3.removeClass("show");
  category4.removeClass("show");
  category5.removeClass("show");
  category6.removeClass("show");
  category7.removeClass("show");
  category8.removeClass("show");
  category9.removeClass("show");
  category10.removeClass("show");
}

// 移入的时候，先清空原有的active，再动态的添加
categoryLi.on("mouseenter", ({ target }) => {
  categoryContainer.css("width", "992px");
  categoryContainer.removeClass("show").addClass("hide");
  removeClass();
  const text = target.innerText;
  if (text === "手机") {
    category1.addClass("show");
  } else if (text === "电视") {
    category2.addClass("show");
  } else if (text === "家电") {
    category3.addClass("show");
  } else if (text === "笔记本 平板") {
    category4.addClass("show");
  } else if (text === "出行 穿戴") {
    category5.addClass("show");
  } else if (text === "耳机 音箱") {
    category6.addClass("show");
  } else if (text === "健康 儿童") {
    categoryContainer.css("width", "800px");
    category7.addClass("show");
  } else if (text === "生活 箱包") {
    categoryContainer.css("width", "800px");
    category8.addClass("show");
  } else if (text === "智能 路由器") {
    categoryContainer.css("width", "550px");
    category9.addClass("show");
  } else if (text === "电源 配件") {
    categoryContainer.css("width", "550px");
    category10.addClass("show");
  }
  chooseLi = text;
});

categoryContainer.on("mouseenter", () => {
  if (!chooseLi) return;
  const li = $(`.categoryContainer .category li:contains(${chooseLi})`);
  checkLi = li;
  li.addClass("active");
  if (chooseLi === "手机") {
    category1.addClass("show");
  } else if (chooseLi === "电视") {
    category2.addClass("show");
  } else if (chooseLi === "家电") {
    category3.addClass("show");
  } else if (chooseLi === "笔记本 平板") {
    category4.addClass("show");
  } else if (chooseLi === "出行 穿戴") {
    category5.addClass("show");
  } else if (chooseLi === "耳机 音箱") {
    category6.addClass("show");
  } else if (chooseLi === "健康 儿童") {
    categoryContainer.css("width", "800px");
    category7.addClass("show");
  } else if (chooseLi === "生活 箱包") {
    categoryContainer.css("width", "800px");
    category8.addClass("show");
  } else if (chooseLi === "智能 路由器") {
    categoryContainer.css("width", "550px");
    category9.addClass("show");
  } else if (chooseLi === "电源 配件") {
    categoryContainer.css("width", "550px");
    category10.addClass("show");
  }
});

categoryUl.on("mouseleave", () => {
  categoryContainer.removeClass("show");
});

categoryContainer.on("mouseleave", () => {
  if (!checkLi) return;
  checkLi.removeClass("active");
  categoryContainer.removeClass("show").addClass("hide");
});
