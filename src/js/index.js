let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadButton = document.getElementById("downloadButton");

function GenerateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    } else {
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example';
    }
}

function downloadQR() {

    if (qrText.value.length > 0) {

        downloadButton.setAttribute('download', 'qrcode.png')

        downloadButton.href = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${qrText.value}&download=1`
    } else {
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example';
        qrText.classList.add('error')
        setTimeout(() => {
            qrText.classList.remove('error')
        }, 1000);
    }
}

qrText.addEventListener('input', GenerateQR);
downloadButton.addEventListener('click', downloadQR); 
