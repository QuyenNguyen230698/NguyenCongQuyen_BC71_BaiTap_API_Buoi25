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
     <button type="button" onclick="suaSp('${item.id}')" class="btn btn-warning">Sửa</button></td>
          </tr>`;
      contentHTML += string;
    });
    document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
  }

  document.getElementById('btnthem').onclick = function(){
    var product = getValue();
    sourceSP.push(product);
    console.log(sourceSP);
    createInfor(product)
    .then((result) => {
        $("#myModal").modal("hide");
        fetchListSP()
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
//#endregion


