
var DSSP = [];

//get API
var urlApi = "https://66a7894253c13f22a3d01bc8.mockapi.io/mydau848/api/v1/Capstone";


function fetchListSP() {
    axios({
        url: urlApi,
        method: "GET",
    }).then(function(res){
        // thành công
        console.log(res.data)
    }).catch(function(err){
        //thất bại
        console.log(err)
    });
}
fetchListSP()