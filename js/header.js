const downloadText = $(".img .download");
const downloadContent = $(".img .content");
const cartText = $(".nav .cart");
const cartContent = $(".nav .shop");

// 显示和隐藏下载
function download() {
  downloadText.on("mouseenter", () => {
    downloadContent.css("display", "block");
  });

  downloadText.on("mouseleave", () => {
    downloadContent.css("display", "none");
  });

  downloadContent.on("mouseenter", () => {
    downloadContent.css("display", "block");
  });

  downloadContent.on("mouseleave", () => {
    downloadContent.css("display", "none");
  });
}

// 显示和隐藏购物车
function cart() {
  cartText.on("mouseenter", () => {
    cartContent.css("display", "block");
  });

  cartText.on("mouseleave", () => {
    cartContent.css("display", "none");
  });

  cartContent.on("mouseenter", () => {
    cartContent.css("display", "block");
  });

  cartContent.on("mouseleave", () => {
    cartContent.css("display", "none");
  });
}

export { download, cart };
