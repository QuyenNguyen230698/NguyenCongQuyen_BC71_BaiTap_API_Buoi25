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

var data = localStorage.getItem("GIOHANG_JSON");
var spArr = JSON.parse(data);
console.log("🚀 ~ spArr:", spArr)

gioHang = spArr;
console.log(gioHang);

if (gioHang.length > 0) {
  renderGioHang(gioHang);
  document.getElementById("totalPrices").style.display = "block";
  document.getElementById("emptys").style.display = "none";
} else {
  document.getElementById("totalPrices").style.display = "none";
  document.getElementById("emptys").style.display = "block";
}

function renderGioHang(gioHang) {
  var contentHTML = "";
  for (var i = 0; i < gioHang.length; i++) {
    var totalLinePrice = gioHang[i].price * gioHang[i].quantity;
    var stringSP = `
    <div class="product" >
        <div class="product-image">
          <img src="${gioHang[i].img}">
        </div>
        <div class="product-details">
          <div class="product-title">${gioHang[i].name}</div>
          <p class="product-description">${gioHang[i].desc}</p>
        </div>
        <div class="product-price">${gioHang[i].price}</div>
        <div class="product-quantity">
          <input id="soLuongSp" type="number" value="${gioHang[i].quantity}" min="1">
        </div>
        <div class="product-removal">
          <button onclick="xoaSP('${gioHang[i].id}')" class="remove-product">
            Remove
          </button>
        </div>
        <div class="product-line-price">${totalLinePrice.toFixed(2)}</div>
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
                <button id="countButton" onclick="themSP('${list[i].id}')">Thêm Giỏ</button>
              </div>
            </div>
          </div>`;
    contentHTML += stringSP;
  }
  document.getElementById("content_services").innerHTML = contentHTML;
}

updateDisplay(); // Cập nhật số lượng đối tượng

function themSP(id) {
  getListService(id)
    .then((result) => {
      var list = result.data;

      // Tìm sản phẩm trong giỏ hàng
      const existingProduct = gioHang.find(item => item.id === list.id);
      
      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng của nó
        existingProduct.quantity += 1;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
        gioHang.push({ ...list, quantity: 1 });
      }

        renderGioHang(gioHang);
      document.getElementById("totalPrices").style.display = "block";
      document.getElementById("emptys").style.display = "none";
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

function xoaSP(id) {
  getListService(id)
    .then((result) => {
      var list = result.data;
      gioHang.splice(list, 1);

      var xoaJSON = JSON.stringify(gioHang);
      localStorage.setItem("GIOHANG_JSON", xoaJSON);

      console.log("🚀 ~ .then ~ gioHang:", gioHang)
      renderGioHang(gioHang);

      if (gioHang.length == 0) {
        document.getElementById("totalPrices").style.display = "none";
        document.getElementById("emptys").style.display = "block";
      }
      updateDisplay(); // Cập nhật số lượng đối tượng
    })
    .catch((err) => {
      console.log("err");
    });
}

document.getElementById("muaNgay").onclick = function () {
  var gioHang = [];

  var xoaJSON = JSON.stringify(gioHang);
  localStorage.setItem("GIOHANG_JSON", xoaJSON);

  renderGioHang(gioHang);
  console.log(gioHang);
  if (gioHang.length == 0) {
    document.getElementById("totalPrices").style.display = "none";
    document.getElementById("emptys").style.display = "block";
  }
  updateDisplay(); // Cập nhật số lượng đối tượng
};

function clearGioHang() {
  var gioHang = [];

  var xoaJSON = JSON.stringify(gioHang);
  localStorage.setItem("GIOHANG_JSON", xoaJSON);

  renderGioHang(gioHang);
  console.log(gioHang);
  if (gioHang.length == 0) {
    document.getElementById("totalPrices").style.display = "none";
    document.getElementById("emptys").style.display = "block";
  }
  updateDisplay(); // Cập nhật số lượng đối tượng
}