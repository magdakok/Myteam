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
  