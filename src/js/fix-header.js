const header = document.querySelector('.header');
const page = document.querySelector('main');
let links = document.querySelectorAll('.links');
const nodeList = document.querySelectorAll(".modal__link");
console.log(nodeList[1]);
// for (let i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.backgroundColor = "red";
//   if (nodeList[i].click()) {
//     console.log("linki");
    
//   };
// }

nodeList[1].onclick = () => {
  // for (let i = 0; i < nodeList.length; i++) {
    // if (i < 8) {
      console.log("click");
      header.classList.remove('fix-header');
    }
   



 // scroll 
if(window.innerWidth <= 800 ) {
function fixHeader() {
    if (window.scrollY > header.clientHeight) {
      header.classList.add('fix-header')
      page.style.marginTop = header.clientHeight + 'px';
    } else {
      header.classList.remove('fix-header')
      page.style.marginTop = 0;
    }
  }  
  window.addEventListener('scroll', fixHeader)
} else { 
  console.log(">800");
window.addEventListener('wheel', function(evt) {
  if(evt.deltaY < 0) {
    //  console.log('поймали: ');
    header.classList.add('fix-header')
    page.style.marginTop = header.clientHeight + 'px';
  } else {
    header.classList.remove('fix-header')
      page.style.marginTop = 0;
    }
 
});
// header.contains
header.addEventListener('click', () => {    
  header.classList.remove('fix-header');
  page.style.marginTop = 0;
});

}
