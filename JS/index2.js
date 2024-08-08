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
      updateDisplay(); // Cập nhật hiển thị sp gio hang
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
        const countDisplay = document.getElementById('total-count');
        const countButton = document.getElementById('countButton');

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

  
function themSP(id) {

 getListService(id).then((result) => {
        var list = result.data;
        DSSP.push(list);
        // renderGioHang(DSSP)

        console.log(DSSP)

          // chuyen doi DSNV thanh chuoi JSON
  var DSSPJSON = JSON.stringify(DSSP);
  // luu xuong local storage
  localStorage.setItem("DSSP_JSON", DSSPJSON);

  updateDisplay(); // Cập nhật số lượng đối tượng

    }).catch((err) => {
        console.log('err');
    });
      updateDisplay(); // Cập nhật hiển thị
}