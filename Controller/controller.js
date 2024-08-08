//get API
var urlApi =
  "https://66a7894253c13f22a3d01bc8.mockapi.io/mydau848/api/v1/Capstone";

function showHide() {
    var chonSp = document.getElementById('chonSanPham').value;
    axios({
        url: urlApi,
        method: "GET",
      })
        .then(function (res) {
          // thành công
          var chonSanPham = res.data;
          var spIphone = [];
          spIphone.push(chonSanPham[0],chonSanPham[3]);
          var spSamsung = [];
          spSamsung.push(chonSanPham[1],chonSanPham[2]);
          if (chonSp == 'iphone'){
            renderSp(spIphone)
          } else if (chonSp == 'samsung'){
            renderSp(spSamsung);
          } else {
            renderSp(chonSanPham)
          }
        })
        .catch(function (err) {
          //thất bại
          console.log(err);
        });
}


function getListService(id){
    return  axios({
         url: `${urlApi}/${id}`,
         method: "GET",
       })
 }
 
 function createListService(newProduct){
     return axios({
         url: urlApi,
         method: "POST",
         data: newProduct,
       })
 }

 function deleteListService(id){
    return axios({
        url: `${urlApi}/${id}`,
        method: "DELETE",
      })
}

function fixedListService(id){
    return axios({
        url: `${urlApi}/${id}`,
        method: "GET",
      })
}

function updateListService(id,sp){ 
    return axios({
        url: `${urlApi}/${id}`,
        method: "PUT",
        data:sp,
      })
}