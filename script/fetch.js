function loadSections() {
  fetch("./sections/nav.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("nav").innerHTML = data;
  });

  fetch("./sections/cta-box.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".cta-box").innerHTML = data;
  });

fetch("./sections/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
}

function navShow() {
  const openNavIcon = document.querySelector('#open-nav');
  const closeNavIcon = document.querySelector('#close-nav');
  const menu = document.querySelector('.nav__box');
  const background = document.querySelector('.nav__background');

  openNavIcon.addEventListener('click', function(){
      menu.style.right='0';
      background.style.zIndex='2';
      background.style.opacity='1';
      document.querySelector('body').style.overflowY= 'hidden';

  });

  closeNavIcon.addEventListener('click', function(){
      menu.style.right='-68%';
      background.style.zIndex='-1';
      background.style.opacity='0';
      document.querySelector('body').style.overflowY= 'visible';
  });
}

loadSections();
checkVariable();

function checkVariable() {
  if ( document.querySelector('.hamburger') != null ) {
    navShow();
  } else {
    window.setTimeout("checkVariable();",100);
  }
} 
