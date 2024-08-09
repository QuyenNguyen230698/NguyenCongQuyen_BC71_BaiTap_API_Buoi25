var DSSP = []; // clone API
var gioHang = []; // push sản phẩm vào giỏ hàng
function fetchListSP() {
  axios({
    url: urlApi,
    method: "GET",
  })
    .then(function (res) {
      // thành công
      DSSP = [...res.data]; // clone API
      renderSp(DSSP);
    })
    .catch(function (err) {
      //thất bại
      console.log(err);
    });
}
fetchListSP();

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
  const cartArray = JSON.parse(localStorage.getItem("GIOHANG_JSON")) || []; 
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
      gioHang.push(list);

    //   document.getElementById("totalPrices").style.display = "block";
    //   document.getElementById("emptys").style.display = "none";
      console.log("🚀 ~ .then ~ gioHang:", gioHang)

      // chuyen doi SP thanh chuoi JSON
      var GIOHANGJSON = JSON.stringify(gioHang);
      // luu xuong local storage
      localStorage.setItem("GIOHANG_JSON", GIOHANGJSON);

      updateDisplay(); // Cập nhật số lượng đối tượng
    })
    .catch((err) => {
      console.log("err");
    });
}

