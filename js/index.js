const navBar = document.querySelector(".nav-bar");
const navHS = document.querySelector(".nav-btm");
const navLink = document.querySelectorAll('.nav-link')


let i = 0;
navBar.addEventListener("click", () => {
  switch (i) {
    case 0:
      navHS.style.display = "inline-flex";
      return i = 1;
      break;
    case 1:
      navHS.style.display = "none";
      return i = 0;
      break;
  }
})

navLink.forEach(link => {
  link.addEventListener("click", () => {
    navHS.style.display = "none";
    return i = 0;
  })
});
