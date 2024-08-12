
//#region get value
function getValue() {
    var name = document.getElementById('TenSP').value;
    var price = document.getElementById('GiaSP').value * 1;
    var screen = document.getElementById('manHinhSP').value;
    var backCamera = document.getElementById('backSP').value;
    var frontCamera = document.getElementById('frontSP').value;
    var img = document.getElementById('hinhSP').value;
    var desc = document.getElementById('motaSP').value;
    var type = document.getElementById('typeSP').value;

    var product = {
        name: name,
        price: price,
        screen: screen,
        backCamera: backCamera,
        frontCamera: frontCamera,
        img: img,
        desc: desc,
        type: type,
    }
    return product;
}
//#endregion