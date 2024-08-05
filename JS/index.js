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
      renderSP(res.data);
    })
    .catch(function (err) {
      //thất bại
      console.log(err);
    });
}
fetchListSP();

function renderSP(list) {
  var contentHTML = "";
  for (var i = 0; i < list.length; i++) {
    var stringSP = `<tr>
    <td class="first-td"><img width="100" src="${list[i].img}" alt="">${list[i].name}</td>
    <td>${list[i].price}</td>
    <td>1</td>
    <td>${list[i].price}</td>
    <td><button onclick="" style="cursor: pointer;"><i class="fa fa-trash-alt"></i></button></td>
    </tr>`;
    contentHTML += stringSP;
  }
  document.getElementById("tblBody").innerHTML = contentHTML;
}
