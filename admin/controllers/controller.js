
//#region get API
var urlApi =
  "https://66a7894253c13f22a3d01bc8.mockapi.io/mydau848/api/v1/Capstone";


function getInfor() {
   return axios({
        url: urlApi,
        method: "GET",
      })
}
function createInfor(product) {
    return axios({
         url: urlApi,
         method: "POST",
         data: product,
       })
 }
function deleteInfor(id) {
    return axios({
         url: `${urlApi}/${id}`,
         method: "DELETE",
       })
 }
 function fixInfor(id) {
    return axios({
         url: `${urlApi}/${id}`,
         method: "GET",
       })
 }
function updateInfor(id,product) {
    return axios({
         url: `${urlApi}/${id}`,
         method: "PUT",
         data: product,
       })
 }
//#endregion
