
function domID(id) {
    return document.getElementById(id);
}

function checkName(value) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (value == '') {
        domID('tbName').innerText = "Trường này không được để trống !";
        domID('tbName').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbName').innerText = '';
        return true;
    } else {
        domID('tbName').innerText = 'Tên sản phẩm không được có dấu tiếng việt !';
        domID('tbName').style.display = 'block';
        return false;
    }
}
function checkPrice(value) {
    const regex = /^[0-9]{4,6}$/;
    if (value == '') {
        domID('tbPrice').innerText = "Trường này không được để trống !";
        domID('tbPrice').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbPrice').innerText = '';
        return true;
    } else {
        domID('tbPrice').innerText = 'Nhập giá sản phẩm bằng số 4-6 !';
        domID('tbPrice').style.display = 'block';
        return false;
    }
}
function checkScreen(value) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (value == '') {
        domID('tbScreen').innerText = "Trường này không được để trống !";
        domID('tbScreen').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbScreen').innerText = '';
        return true;
    } else {
        domID('tbScreen').innerText = 'Không được có dấu tiếng việt !';
        domID('tbScreen').style.display = 'block';
        return false;
    }
}
function checkBackCamera(value) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (value == '') {
        domID('tbBacksp').innerText = "Trường này không được để trống !";
        domID('tbBacksp').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbBacksp').innerText = '';
        return true;
    } else {
        domID('tbBacksp').innerText = 'Không được có dấu tiếng việt !';
        domID('tbBacksp').style.display = 'block';
        return false;
    }
}
function checkFrontCamera(value) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (value == '') {
        domID('tbFrontsp').innerText = "Trường này không được để trống !";
        domID('tbFrontsp').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbFrontsp').innerText = '';
        return true;
    } else {
        domID('tbFrontsp').innerText = 'Không được có dấu tiếng việt !';
        domID('tbFrontsp').style.display = 'block';
        return false;
    }
}
function checkImg(value) {
    const regex = /^https:\/\/[a-zA-Z0-9\-\.\/\_]+\.(jpg|jpeg|png|gif)$/;
    if (value == '') {
        domID('tbImg').innerText = "Trường này không được để trống !";
        domID('tbImg').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbImg').innerText = '';
        return true;
    } else {
        domID('tbImg').innerText = 'Nhập link hình ảnh bằng link CDN !';
        domID('tbImg').style.display = 'block';
        return false;
    }
}
function checkDesc(value) {
    const regex = /^[a-zA-Zàáâãèéêìíòóôõùúûüỳýđ\s]+$/;
    if (value == '') {
        domID('tbDescsp').innerText = "Trường này không được để trống !";
        domID('tbDescsp').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbDescsp').innerText = '';
        return true;
    } else {
        domID('tbDescsp').innerText = 'Nhập đúng nội dung mô tả sản phẩm!';
        domID('tbDescsp').style.display = 'block';
        return false;
    }
}
function checkType(value) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (value == '') {
        domID('tbTypesp').innerText = "Trường này không được để trống !";
        domID('tbTypesp').style.display = "block";
        return false;
    } else if (regex.test(value)) {
        domID('tbTypesp').innerText = '';
        return true;
    } else {
        domID('tbTypesp').innerText = 'Sai tên sản phẩm !';
        domID('tbTypesp').style.display = 'block';
        return false;
    }
}