const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");

const url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
function GenerateQr() {
  if(qrText.value.length > 0) {
  qrImage.src = url + qrText.value;
    
  }
  else{
    qrText.setAttribute("class","error");
      setTimeout(() => {
      qrText.classList.remove("error");
    }, 3000);
  }
}
