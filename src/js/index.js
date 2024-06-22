// btnMenu

const navigation = document.querySelector("nav .navigation");
const menuBtn = document.querySelector(".hamBtn .menuBtn");
menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

// Year On Footer
const yearCopyright = document.querySelector("footer .year");
const dFunction = new Date();
yearCopyright.innerHTML = dFunction.getFullYear();
