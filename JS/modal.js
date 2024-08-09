cart = [];

// Constructor
function Item(
  id,
  name,
  price,
  screen,
  backCamera,
  frontCamera,
  img,
  desc,
  type
) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.screen = screen;
  this.backCamera = backCamera;
  this.frontCamera = frontCamera;
  this.img = img;
  this.desc = desc;
  this.type = type;
}

document.getElementById("muaNgay").onclick = function () {
  var DSSP = [];

  var xoaJSON = JSON.stringify(DSSP);
  localStorage.setItem("DSSP_JSON", xoaJSON);

  renderGioHang(DSSP);
  console.log(DSSP);
  if (DSSP.length == 0) {
    document.getElementById("totalPrices").style.display = "none";
    document.getElementById("emptys").style.display = "block";
  }
  updateDisplay(); // Cập nhật số lượng đối tượng
};

let count = 0;
const countDisplay = document.getElementById("total-count");
const countButton = document.getElementById("countButton");

function loadFromLocalStorage() {
  const cartArray = JSON.parse(localStorage.getItem("DSSP_JSON")) || []; 
  return cartArray;
}

// Cập nhật hiển thị số đếm
function updateDisplay() {
  const cartArray = loadFromLocalStorage(); // Tải dữ liệu từ localStorage
  const count = cartArray.length; // Đếm số lượng đối tượng

  // Hiển thị số lượng đối tượng bắt đầu từ 1
  countDisplay.textContent = `(${count > 0 ? count : 0})`;
}