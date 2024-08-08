var DSSP = [];

function fetchListSP() {
  axios({
    url: urlApi,
    method: "GET",
  })
    .then(function (res) {
      // thành công
      renderSp(res.data);
      // renderGioHang(res.data);
    })
    .catch(function (err) {
      //thất bại
      console.log(err);
    });
}
fetchListSP();

var data = localStorage.getItem("DSSP_JSON");
var spArr = JSON.parse(data);
for (var i = 0; i < spArr.length; i++) {
  var data = spArr[i];
  var sp = new Item(
    data.id,
    data.name,
    data.price,
    data.screen,
    data.backCamera,
    data.frontCamera,
    data.img,
    data.desc,
    data.type
  );
  DSSP.push(sp);
}
console.log(DSSP);
if (DSSP.length > 0) {
  renderGioHang(DSSP);
  document.getElementById("totalPrices").style.display = "block";
  document.getElementById("emptys").style.display = "none";
} else {
  document.getElementById("totalPrices").style.display = "none";
  document.getElementById("emptys").style.display = "block";
}

function renderGioHang(DSSP) {
  var contentHTML = "";
  for (var i = 0; i < DSSP.length; i++) {
    var stringSP = `
    <div class="product">
        <div class="product-image">
          <img src="${DSSP[i].img}">
        </div>
        <div class="product-details">
          <div class="product-title">${DSSP[i].name}</div>
          <p class="product-description">${DSSP[i].desc}</p>
        </div>
        <div class="product-price">${DSSP[i].price}</div>
        <div class="product-quantity">
          <input id="soLuongSp" type="number" value="1" min="1">
        </div>
        <div class="product-removal">
          <button onclick="xoaSP('${DSSP[i].id}')" class="remove-product">
            Remove
          </button>
        </div>
        <div class="product-line-price">${DSSP[i].price}</div>
      </div>`;
    contentHTML += stringSP;
  }
  document.getElementById("tblBody").innerHTML = contentHTML;
  // Gán lại sự kiện cho các phần tử mới thêm vào
  document.querySelectorAll(".product-quantity input").forEach((input) => {
    input.addEventListener("change", function () {
      updateQuantity(this);
    });
  });
  recalculateCart();
}

function renderSp(list) {
  var contentHTML = "";
  for (var i = 0; i < list.length; i++) {
    var stringSP = `
    <div id="spIphone2" class="services_item">
            <img src="${list[i].img}" alt="" />
            <div class="desc">
              <h3>${list[i].name}</h3>
              <p>${list[i].desc}</p>
            </div>
            <div class="price">
              <h2>${list[i].price}</h2>
              <div style="white-space: nowrap;">
                <button id="countButton" onclick="themSP('${list[i].id}')">Mua ngay</button>
                <button id="countButton" onclick="themSP('${list[i].id}')">Thêm vào Giỏ</button>
              </div>
            </div>
          </div>`;
    contentHTML += stringSP;
  }
  document.getElementById("content_services").innerHTML = contentHTML;
}

let count = 0;
const countDisplay = document.getElementById("total-count");
const countButton = document.getElementById("countButton");

function loadFromLocalStorage() {
  const cartArray = JSON.parse(localStorage.getItem("DSSP_JSON")) || []; // Hoặc tên của key mà bạn đã lưu
  return cartArray;
}

// Cập nhật hiển thị số đếm
function updateDisplay() {
  const cartArray = loadFromLocalStorage(); // Tải dữ liệu từ localStorage
  const count = cartArray.length; // Đếm số lượng đối tượng

  // Hiển thị số lượng đối tượng bắt đầu từ 1
  countDisplay.textContent = `(${count > 0 ? count : 0})`;
}

updateDisplay(); // Cập nhật số lượng đối tượng

function themSP(id) {
  getListService(id)
    .then((result) => {
      var list = result.data;
      DSSP.push(list);
      renderGioHang(DSSP);
      document.getElementById("totalPrices").style.display = "block";
      document.getElementById("emptys").style.display = "none";

      console.log(DSSP);

      // chuyen doi DSNV thanh chuoi JSON
      var DSSPJSON = JSON.stringify(DSSP);
      // luu xuong local storage
      localStorage.setItem("DSSP_JSON", DSSPJSON);

      updateDisplay(); // Cập nhật số lượng đối tượng
    })
    .catch((err) => {
      console.log("err");
    });
}

function xoaSP(id) {
  getListService(id)
    .then((result) => {
      var list = result.data;
      DSSP.splice(list, 1);

      var xoaJSON = JSON.stringify(DSSP);
      localStorage.setItem("DSSP_JSON", xoaJSON);

      renderGioHang(DSSP);
      console.log(DSSP);
      if (DSSP.length == 0) {
        document.getElementById("totalPrices").style.display = "none";
        document.getElementById("emptys").style.display = "block";
      }
      updateDisplay(); // Cập nhật số lượng đối tượng
    })
    .catch((err) => {
      console.log("err");
    });
}
