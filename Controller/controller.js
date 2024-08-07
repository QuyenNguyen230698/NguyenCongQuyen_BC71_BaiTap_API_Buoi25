//get API
var urlApi =
  "https://66a7894253c13f22a3d01bc8.mockapi.io/mydau848/api/v1/Capstone";

function showHide() {
    var iphone1 = document.getElementById('spIphone1');
    var iphone2 = document.getElementById('spIphone2');
    var samSung1 = document.getElementById('spSamsung1');
    var samSung2 = document.getElementById('spSamsung2');
    var chonSP = document.getElementById('chonSanPham').value;
    console.log("🚀 ~ showIphone ~ chonSP:", chonSP)

    if (chonSP == 'iphone') {
        iphone1.style.display = 'block';
        iphone2.style.display = 'block';
        samSung1.style.display = 'none';
        samSung2.style.display = 'none';
    } else if (chonSP == 'samsung') {
        iphone1.style.display = 'none';
        iphone2.style.display = 'none';
        samSung1.style.display = 'block';
        samSung2.style.display = 'block';
    } else {
        iphone1.style.display = 'block';
        iphone2.style.display = 'block';
        samSung1.style.display = 'block';
        samSung2.style.display = 'block';
    }
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