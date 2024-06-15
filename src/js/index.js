// btnMenu

const navigation = document.querySelector("nav .navigation");
const menuBtn = document.querySelector(".hamBtn .menuBtn");
menuBtn.addEventListener("click", () => {
  navigation.classList.toggle('show')
});
