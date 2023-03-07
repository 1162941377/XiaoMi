// 维护一个列表以供显示
let searchText = [
  {
    id: 1,
    content: "手机",
  },
  {
    id: 2,
    content: "电视",
  },
  {
    id: 3,
    content: "冰箱",
  },
  {
    id: 4,
    content: "红米",
  },
  {
    id: 5,
    content: "打印机",
  },
  {
    id: 6,
    content: "空气净化器",
  },
  {
    id: 7,
    content: "笔记本",
  },
];

const searchInp = $(".inp .searchText");
const searchBtn = $(".search .buttonGroup .btn");
const pngContainer1 = $(".main .showPng .pngContainer:eq(0)");
const pngContainer2 = $(".main .showPng .pngContainer:eq(1)");
const pngContainer3 = $(".main .showPng .pngContainer:eq(2)");
const pngContainer4 = $(".main .showPng .pngContainer:eq(3)");
const pngContainer5 = $(".main .showPng .pngContainer:eq(4)");
const pngContainer6 = $(".main .showPng .pngContainer:eq(5)");
const pngContainer7 = $(".main .showPng .pngContainer:eq(6)");
const showPng = $(".main .showPng");
const btnGroup = $(".search .buttonGroup");

let chooseLi = "";
let checkLi = null;

let startTime = null;
let endTime = null;

// 移除样式
function removeClass() {
  pngContainer1.removeClass("show");
  pngContainer2.removeClass("show");
  pngContainer3.removeClass("show");
  pngContainer4.removeClass("show");
  pngContainer5.removeClass("show");
  pngContainer6.removeClass("show");
  pngContainer7.removeClass("show");
}

searchBtn.on("mouseenter", async ({ target }) => {
  startTime = new Date().getTime();
  endTime = startTime;
  clearTimeout();
  await sleep(null, 0);
  showPng.css("display", "block");
  removeClass();
  const text = target.innerText;
  if (text === "Xiaomi手机") {
    pngContainer1.addClass("show");
  } else if (text === "Redmi手机") {
    pngContainer2.addClass("show");
  } else if (text === "电视") {
    pngContainer3.addClass("show");
  } else if (text === "笔记本") {
    pngContainer4.addClass("show");
  } else if (text === "平板") {
    pngContainer5.addClass("show");
  } else if (text === "家电") {
    pngContainer6.addClass("show");
  } else if (text === "路由器") {
    pngContainer7.addClass("show");
  } else {
    await sleep(null, 0);
    showPng.css("display", "none");
  }
  chooseLi = text;
});

btnGroup.on("mouseleave", async () => {
  endTime = new Date().getTime();
  if (endTime - startTime < 999) {
    return;
  }
  clearTimeout();
  if (!checkLi) {
    await sleep(null, 999);
    showPng.css("display", "none");
    return;
  }
  checkLi.removeClass("active");
  await sleep(null, 999);
  showPng.css("display", "none");
});

showPng.on("mouseenter", async () => {
  startTime = new Date().getTime();
  endTime = startTime;
  clearTimeout();
  if (!chooseLi) return;
  const li = $(`.search .buttonGroup .btn:contains(${chooseLi})`);
  checkLi = li;
  li.addClass("active");
  await sleep(null, 999);
  showPng.css("display", "block");
});

showPng.on("mouseleave", async () => {
  endTime = new Date().getTime();
  if (endTime - startTime < 999) {
    checkLi.removeClass("active");
    showPng.css("display", "block");
    return;
  }
  clearTimeout();
  if (!checkLi) return;
  checkLi.removeClass("active");
  await sleep(null, 999);
  showPng.css("display", "none");
});

// 定时函数
async function sleep(id, duration = 1999) {
  return new Promise((res) => {
    return setTimeout(() => {
      res(id);
    }, duration);
  });
}

// 切换状态
async function toggle() {
  searchInp.attr("placeholder", searchText[0].content);
  for (let i = 0; i < searchText.length; i++) {
    searchInp.attr("placeholder", await sleep(searchText[i].content));
    if (searchText[i].content === "笔记本") {
      await sleep();
      toggle();
    }
  }
}

export default toggle;
