
function showHide() {
    var iphone1 = document.getElementById('spIphone1');
    var iphone2 = document.getElementById('spIphone2');
    var samSung1 = document.getElementById('spSamsung1');
    var samSung2 = document.getElementById('spSamsung2');
    var chonSP = document.getElementById('chonSanPham').value;
    console.log("🚀 ~ showIphone ~ chonSP:", chonSP)

    if (chonSP == 'Iphone') {
        iphone1.style.display = 'block';
        iphone2.style.display = 'block';
        samSung1.style.display = 'none';
        samSung2.style.display = 'none';
    } else if (chonSP == 'Samsung') {
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

