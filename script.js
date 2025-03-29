document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav ul li a").forEach((item) => {
    item.addEventListener("click", () => {
      document.getElementById("check").checked = false;
    });
  });
});

function downloadcv() {
  const cvUrl = "./Muthulakshmi_resume.pdf";
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Muthulakshmi_resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

}
function openProject(url) {
  window.open(url, '_blank');
}
document.addEventListener("DOMContentLoaded", () => {
  const myCertificate = document.querySelector('.myCertificate');
  const btns = document.querySelectorAll('.btn');
  const imglist = ["zitacad", "UI_Design", "Cart_Item"];
  let index = 0;
  

  btns.forEach((button) => {
      button.addEventListener('click', () => {
          if (button.classList.contains('btn-prev')) {
              index--;
              if (index < 0) {
                  index = imglist.length - 1;
              }
          } else if (button.classList.contains('btn-next')) {
              index++;
              if (index >= imglist.length) {
                  index = 0;
              }
          }
          myCertificate.style.background = `url("Images/${imglist[index]}.jpeg") center/cover`;
      });
  });
});