var DSSP = [];

//get API
var urlApi =
  "https://66a7894253c13f22a3d01bc8.mockapi.io/mydau848/api/v1/Capstone";

function fetchListSP() {
  axios({
    url: urlApi,
    method: "GET",
  })
    .then(function (res) {
      // thành công
    //   renderGioHang(res.data);
      renderSp(res.data);
    })
    .catch(function (err) {
      //thất bại
      console.log(err);
    });
}
fetchListSP();

function renderGioHang(list) {
  var contentHTML = "";
  for (var i = 0; i < list.length; i++) {
    var stringSP = `
    <div class="product">
        <div class="product-image">
          <img src="${list[i].img}">
        </div>
        <div class="product-details">
          <div class="product-title">${list[i].name}</div>
          <p class="product-description">${list[i].desc}</p>
        </div>
        <div class="product-price">${list[i].price}</div>
        <div class="product-quantity">
          <input type="number" value="1" min="1">
        </div>
        <div class="product-removal">
          <button onclick="xoaSP('${list[i].id}')" class="remove-product">
            Remove
          </button>
        </div>
        <div class="product-line-price">${list[i].price}</div>
      </div>`;
    contentHTML += stringSP;
  }
  document.getElementById("tblBody").innerHTML = contentHTML;
}

function totalPrice() {
    document.getElementById("cart-subtotal").innerHTML = total;
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
                <button onclick="themSP('${list[i].id}')">Mua ngay</button>
                <button onclick="themSP('${list[i].id}')">Thêm vào Giỏ</button>
              </div>
            </div>
          </div>`;
    contentHTML += stringSP;
  }
  document.getElementById("content_services").innerHTML = contentHTML;
}

function themSP(id) {
 getListService(id).then((result) => {
        var list = result.data;
        DSSP.push(list);
        renderGioHang(DSSP)
        document.getElementById("totalPrices").style.display = "block";
        document.getElementById("emptys").style.display = "none";
        console.log(DSSP)
    }).catch((err) => {
        console.log('err');
    });
}

function xoaSP(id) {
    getListService(id).then((result) => {
        var list = result.data;
        DSSP.splice(list, 1);
        renderGioHang(DSSP)
        console.log(DSSP)
        if (DSSP.length == 0) {
            document.getElementById("totalPrices").style.display = "none";
            document.getElementById("emptys").style.display = "block";
        }
    }).catch((err) => {
        console.log('err');
    });
}