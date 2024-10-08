//#region Import 
// import { getInfor ,createInfor ,deleteInfor ,updateInfor ,
//     getInforID ,createInforID ,deleteInforID ,updateInforID } from "../controllers/controller.js";
// import { getValue} from "../services/productServices.js";
//#endregion

var sourceSP = [];

function fetchListSP() {
  getInfor()
    .then(function (res) {
      // thành công
      sourceSP = [...res.data];
      renderSp(sourceSP);
      console.log(sourceSP);
    })
    .catch(function (err) {
      //thất bại
      console.log(err);
    });
}
fetchListSP();
//#region button chức năng
function renderSp(data) {
    var contentHTML = "";
    data.forEach((item, index) => {
      var string = `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td><img src="${item.img}" width=100 alt=""></td>
          <td>${item.desc}</td>
          <td style="white-space: nowrap"><button type="button" onclick="deleteSP('${item.id}')" class="btn btn-danger">Xoá</button>
     <button type="button" onclick="fixSP('${item.id}')" class="btn btn-warning">Sửa</button></td>
          </tr>`;
      contentHTML += string;
    });
    document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
  }

  document.getElementById('btnthem').onclick = function(){
    var product = getValue();

    var isValid = checkName(product.name,'tbName') & 
    checkPrice(product.price,'tbPrice') &
    checkScreen(product.screen,'tbScreen') & 
    checkBackCamera(product.backCamera,'tbBacksp') &
    checkFrontCamera(product.frontCamera,'tbFrontsp') & 
    checkImg(product.img,'tbImg') &
    checkDesc(product.desc,'tbDescsp') &
    checkType(product.type,'tbTypesp');
    if (!isValid) return false;

    sourceSP.push(product);
    console.log(sourceSP);
    createInfor(product)
    .then((result) => {
        fetchListSP();
        document.getElementById('tbSuccess').style.display = 'block';
        $("#myModal").modal("hide");
    }).catch((err) => {
        console.log('err');
    });
  }

 function deleteSP(id){
    deleteInfor(id)
    .then((result) => {
        fetchListSP()
    }).catch((err) => {
        console.log('err');
    });
  }
  function fixSP(id){
    fixInfor(id).then((result) => {
        var product = result.data;
        $("#myModal").modal("show");
        document.getElementById('TenSP').value = product.name;
        document.getElementById('GiaSP').value = product.price;
        document.getElementById('manHinhSP').value = product.screen;
        document.getElementById('backSP').value = product.backCamera;
        document.getElementById('frontSP').value = product.frontCamera;
        document.getElementById('hinhSP').value = product.img;
        document.getElementById('motaSP').value = product.desc;
        document.getElementById('typeSP').value = product.type;
        // gắn id vào modal-title
        document.getElementById('product-id').innerText = product.id;
    }).catch((err) => {
        console.log('err');
    });
  }
  document.getElementById('btnCapnhat').onclick = function(){
    var id = document.getElementById('product-id').innerText;
        var product = getValue();
        updateInfor(id,product).then((result) => {
            $("#myModal").modal("hide");
            fetchListSP()
        }).catch((err) => {
            console.log('err');
        });
  }
//#endregion


function displayEmployees(category) {
    var employeeList = document.getElementById('tblDanhSachSP');
    employeeList.innerHTML = ''; // Xóa nội dung cũ

    var filteredEmployees = sourceSP.filter(function(employee) {
        return employee.name === category;
    });
    
    if (filteredEmployees.length > 0) {
        var contentHTML = "";
        filteredEmployees.forEach((item, index) => {
          var string = `<tr>
              <td>${item.id}</td>
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td><img src="${item.img}" width=100 alt=""></td>
              <td>${item.desc}</td>
              <td style="white-space: nowrap"><button type="button" onclick="deleteSP('${item.id}')" class="btn btn-danger">Xoá</button>
         <button type="button" onclick="fixSP('${item.id}')" class="btn btn-warning">Sửa</button></td>
              </tr>`;
          contentHTML += string;
        });
        document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
    } else {
        renderSp(sourceSP);
    }
}

// Hàm xử lý sự kiện tìm kiếm
function searchEmployees() {
    var searchName = document.getElementById('txtSearch').value.trim();
    displayEmployees(searchName);
}

// Lắng nghe sự kiện nhấn nút tìm kiếm
document.getElementById('basic-addon2').addEventListener('click', function() {
    searchEmployees();
});

// Search prices
function sortProducts(order) {
    const sortedProducts = [...sourceSP].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    renderSp(sortedProducts);
  }

  // Initial display
  renderSp(sourceSP);